import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'documents-action',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentsActionComponent implements OnInit {
  @Input() action: any;
  @Input() inverted = false;
  @Input() primaryColor = '#30B286';
  @Input() textColor = '#FFFFFF';
  @Input() userBubbleColor = '#C5DBEA';
  @Input() userTextColor = '#2C3F59';
  @Input() autoScroll = true;
  @Input() disabled = false;
  @Input() isMobile = false;

  @Output() onSendReply = new EventEmitter<any>();
  @Output() onSendDocuments = new EventEmitter<any>();
  @Output() onLoadNextAction = new EventEmitter<boolean>();
  @Output() onLastActionRendered: EventEmitter<boolean> = new EventEmitter<boolean>();

  dialogDisplayed = false;
  maxFileSize = 10000000;
  sizeError = false;
  currentAttachmentIndex = 0;
  showSendFile = false;
  hasFile = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (this.action.status !== 'COMPLETE') {
      this.action.status = 'WAITING';
      for (let document of this.action.documents) {
        document.file = null;
      }
    }
    this.checkHasFile();
    this.detectChanges();
    this.onLoadNextAction.emit(true);
  }

  dialogToggle(): void {
    if ((this.action.status != 'IN_PROGRESS' && this.action.status != 'COMPLETE') || this.action.status == null) {
      this.dialogDisplayed = !this.dialogDisplayed;
      this.detectChanges();
    }
  }

  onFileUpload(file: File): void {
    if (
      this.action.documents[this.currentAttachmentIndex].authorizedFileTypes.length == 0 ||
      this.isAuthorizedFileType(file.type, this.action.documents[this.currentAttachmentIndex].authorizedFileTypes)
    ) {
      if (file.size < this.maxFileSize) {
        this.action.documents[this.currentAttachmentIndex].file = file;
        this.sizeError = false;
        let hasFile = false;
        let allFilesUploaded = true;
        for (let document of this.action.documents) {
          if (document.file == null) {
            allFilesUploaded = false;
          } else {
            hasFile = true;
          }
        }

        if (allFilesUploaded) {
          this.showSendFile = true;
        }
        this.hasFile = hasFile;
        if (this.currentAttachmentIndex < this.action.documents.length - 1) {
          this.currentAttachmentIndex = this.currentAttachmentIndex + 1;
        }
      } else {
        this.sizeError = true;
      }
      this.detectChanges();
    }
  }

  isAuthorizedFileType(fileType: string, authorizedFileTypes: string[]): boolean {
    return authorizedFileTypes.some((authorizedType) => fileType.startsWith(authorizedType));
  }

  deleteFile(index: number): void {
    this.action.documents[index].file = null;
    this.showSendFile = false;
    this.checkHasFile();
    this.detectChanges();
  }

  selectAttachment(i: number) {
    this.currentAttachmentIndex = i;
    this.detectChanges();
  }

  closeError(): void {
    this.sizeError = false;
    this.action.status = 'WAITING';
    this.detectChanges();
  }

  sendFiles(): void {
    this.dialogToggle();
    this.action.status = 'IN_PROGRESS';
    this.onSendDocuments.emit(this.action);
    this.detectChanges();
  }

  checkHasFile() {
    for (let document of this.action.documents) {
      if (document.file) {
        this.hasFile = true;
      }
    }
  }

  private detectChanges(): void {
    this.cdr.markForCheck();
  }
}

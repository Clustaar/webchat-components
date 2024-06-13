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
  maxFileSize = 7000000;
  sizeError = false;
  currentAttachmentIndex = 0;
  showSendFile = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.action.attachments = this.action.attachments && this.action.status == 'COMPLETE' ? this.action.attachments : this.action.documents;
    this.action.files = this.action.files && this.action.status == 'COMPLETE' ? this.action.files : [];
    this.action.status = this.action.status == 'COMPLETE' ? 'COMPLETE' : 'WAITING';
  }

  dialogToggle(): void {
    if (this.action.status != 'IN_PROGRESS' && this.action.status != 'COMPLETE') this.dialogDisplayed = !this.dialogDisplayed;
    this.detectChanges();
  }

  onFileUpload(file: File): void {
    if (this.isAuthorizedFileType(file.type, this.action.attachments[this.currentAttachmentIndex].authorizedFileTypes)) {
      if (file.size < this.maxFileSize) {
        this.action.files.push(file);
        this.action.attachments[this.currentAttachmentIndex].file = file;
        this.sizeError = false;
        let allFilesUploaded = true;
        for (let document of this.action.attachments) {
          if (document.file == null) {
            allFilesUploaded = false;
          }
        }

        if (allFilesUploaded) {
          this.showSendFile = true;
        }
        if (this.currentAttachmentIndex < this.action.attachments.length - 1) {
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
    this.action.files.splice(index, 1);
    this.action.attachments[index].file = null;
    this.showSendFile = false;
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

  private detectChanges(): void {
    this.cdr.markForCheck();
  }
}

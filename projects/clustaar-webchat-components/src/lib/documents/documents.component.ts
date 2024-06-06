import { ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() autoScroll? = true;
  @Input() disabled? = false;

  @Output() onSendReply = new EventEmitter<any>();
  @Output() onSendDocuments = new EventEmitter<any>();
  @Output() onLoadNextAction = new EventEmitter<boolean>();
  @Output() onLastActionRendered: EventEmitter<boolean> = new EventEmitter<boolean>();

  dialogDisplayed = false;
  files: File[] = [];
  maxFileSize = 7000000;
  sizeError = false;
  filesSended: string;
  attachments = [];
  currentAttachmentIndex = 0;
  showSendFile = false;

  constructor(private cdr: ChangeDetectorRef, private app: ApplicationRef) {}

  dialogToggle(): void {
    this.dialogDisplayed = !this.dialogDisplayed;
    this.detectChanges();
  }

  ngOnInit() {
    this.action.attachments = this.action.documents;
  }

  onFileUpload(file: File): void {
    if (file.size < this.maxFileSize) {
      this.files.push(file);
      this.action.attachments[this.currentAttachmentIndex].file = file;
      this.sizeError = false;
      let allFilesUploaded = true;
      for (let attachment of this.action.attachments) {
        if (attachment.file == null) {
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

  deleteFile(index: number): void {
    this.action.attachments[index].file = null;
    this.showSendFile = false;
    this.detectChanges();
  }

  selectAttachment(i) {
    this.currentAttachmentIndex = i;
    this.detectChanges();
  }

  closeError(): void {
    this.sizeError = false;
    this.detectChanges();
  }

  sendFiles(): void {
    this.dialogToggle();
    this.filesSended = this.files.map((file) => file.name).join('\n');
    this.onSendDocuments.emit(this.action);
    this.detectChanges();
  }

  private detectChanges(): void {
    this.cdr.markForCheck();
    this.app.tick();
  }
}

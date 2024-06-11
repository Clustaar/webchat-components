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
  files: File[] = [];
  maxFileSize = 7000000;
  sizeError = false;
  filesSended: string;
  currentAttachmentIndex = 0;
  showSendFile = false;
  attachments = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.attachments = [...this.action.documents];
    //this.action.status = 'ON_PROGRESS';
  }

  dialogToggle(): void {
    if (this.action.status != 'IN_PROGRESS' && this.action.status != 'COMPLETE') this.dialogDisplayed = !this.dialogDisplayed;
    this.detectChanges();
  }

  onFileUpload(file: File): void {
    if (file.size < this.maxFileSize) {
      this.files.push(file);
      this.attachments[this.currentAttachmentIndex].file = file;
      this.sizeError = false;
      let allFilesUploaded = true;
      for (let document of this.attachments) {
        if (document.file == null) {
          allFilesUploaded = false;
        }
      }

      if (allFilesUploaded) {
        this.showSendFile = true;
      }
      if (this.currentAttachmentIndex < this.attachments.length - 1) {
        this.currentAttachmentIndex = this.currentAttachmentIndex + 1;
      }
    } else {
      this.sizeError = true;
    }
    this.detectChanges();
  }

  deleteFile(index: number): void {
    this.files.splice(index, 1);
    this.attachments[index].file = null;
    this.showSendFile = false;
    this.detectChanges();
  }

  selectAttachment(i: number) {
    this.currentAttachmentIndex = i;
    this.detectChanges();
  }

  closeError(): void {
    this.sizeError = false;
    this.detectChanges();
  }

  sendFiles(): void {
    this.dialogToggle();
    this.filesSended = this.attachments.map((attachment) => attachment.name).join('\n');
    this.onSendDocuments.emit({ attachments: this.attachments, action: this.action });
    this.action.status = 'COMPLETE';
    this.detectChanges();
  }

  private detectChanges(): void {
    this.cdr.markForCheck();
  }
}

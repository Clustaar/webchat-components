import { ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'file-action',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileComponent {
  @Input() action: any;
  @Input() inverted = false;
  @Input() primaryColor = '#30B286';
  @Input() textColor = '#FFFFFF';
  @Input() userBubbleColor = '#C5DBEA';
  @Input() userTextColor = '#2C3F59';
  @Input() autoScroll? = true;
  @Input() disabled? = false;

  @Output() onSendReply = new EventEmitter<any>();
  @Output() onLoadNextAction = new EventEmitter<boolean>();
  @Output() onLastActionRendered: EventEmitter<boolean> = new EventEmitter<boolean>();

  dialogDisplayed = false;
  files: File[] = [];
  maxFileSize = 7000000;
  sizeError = false;

  constructor(private cdr: ChangeDetectorRef, private app: ApplicationRef) { }

  dialogToggle(): void {
    this.dialogDisplayed = !this.dialogDisplayed;
    this.detectChanges();
  }

  onFileUpload(file: File): void {
    if (file.size < this.maxFileSize) {
      this.files.push(file);
      this.sizeError = false;
    } else {
      this.sizeError = true;
    }
    this.detectChanges();
  }

  deleteFile(index: number): void {
    this.files.splice(index, 1);
    this.detectChanges();
  }

  closeError(): void {
    this.sizeError = false;
    this.detectChanges();
  }

  sendFiles(): void {
    console.log('Send files to the back')
  }

  private detectChanges(): void {
    this.cdr.markForCheck();
    this.app.tick();
  }
}

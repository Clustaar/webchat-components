import { ApplicationRef, ChangeDetectorRef, Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[libDropFile]'
})
export class DropFileDirective {
  @HostBinding('class.fileover') fileOver: boolean;
  @Output() fileDropped = new EventEmitter<File>();

  constructor(private cdr: ChangeDetectorRef, private app: ApplicationRef) { }

  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(event: DragEvent): void {
    this.preventDefaultBehavior(event);
    this.fileOver = true;
    this.detectChanges();
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(event: DragEvent): void {
    this.preventDefaultBehavior(event);
    this.fileOver = false;
    this.detectChanges();
  }

  // Drop listener
  @HostListener('drop', ['$event']) public ondrop(event: DragEvent): void {
    this.preventDefaultBehavior(event);
    this.fileOver = false;
    this.detectChanges();
    this.fileDropped.emit(event.dataTransfer.files[0]);
  }

  private preventDefaultBehavior(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  private detectChanges(): void {
    this.cdr.markForCheck();
    this.app.tick();
  }
}

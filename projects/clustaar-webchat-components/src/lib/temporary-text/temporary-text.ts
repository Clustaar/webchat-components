import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'temporary-text-console-action',
  templateUrl: './temporary-text.html',
  styleUrls: ['./temporary-text.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemporaryTextConsoleActionComponent implements OnInit, AfterViewInit {
  @Input() indexAction: number;
  @Input() action: any;
  @Input() inverted = false;
  @Input() primaryColor = '#30B286';
  @Input() textColor = '#FFFFFF';
  @Input() autoScroll? = true;
  @Input() duration = 1000;
  @Output() onLoadNextAction = new EventEmitter<boolean>();
  @Output() onLastActionRendered = new EventEmitter<boolean>();

  @ViewChild('textElement') textElement: ElementRef;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.onLoadNextAction.emit(true);

    if (this.autoScroll) {
      setTimeout(() => {
        let element = document.getElementById('chat-console-messages');
        if (element != null) {
          element.scrollTop = element.scrollHeight - element.clientHeight;
          this.cdr.markForCheck();
        }
      }, 500);
    }
    this.cdr.markForCheck();
  }

  ngAfterViewInit() {
    this.cdr.markForCheck();

    setTimeout(() => {
      this.onLastActionRendered.emit(true);
      this.cdr.markForCheck();
    }, 0);
  }
}

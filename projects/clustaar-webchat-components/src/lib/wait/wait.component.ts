import { Component, EventEmitter, Input, OnInit, Output, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'wait-console-action',
  templateUrl: './wait.component.html',
  styleUrls: ['./wait.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WaitConsoleActionComponent implements OnInit, AfterViewInit {
  @Input() action: any;
  @Input() inverted = false;
  @Input() primaryColor = '#30B286';
  @Input() textColor = '#FFFFFF';
  @Input() autoScroll? = true;
  @Input() scrollDuration = 500;
  @Output() onLoadNextAction = new EventEmitter<boolean>();
  @Output() onLastActionRendered: EventEmitter<boolean> = new EventEmitter<boolean>();

  isOver = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    if (this.autoScroll) {
      setTimeout(() => {
        let element = document.getElementById('chat-console-messages');
        if (element) {
          element.scrollTop = element.scrollHeight - element.clientHeight;
          this.cdr.markForCheck();
        }
      }, 500);
    }

    let timeoutDelay = this.action.duration * 1000;

    setTimeout(() => {
      // self.onActionDelayed.emit(true);
      this.onLoadNextAction.emit(true);
      // me.store.dispatch(new console_.LoadNextAction({}, me.target));
      this.isOver = true;
      this.cdr.markForCheck();
    }, timeoutDelay);

    if (this.action.isPublished != null && this.action.isPublished == true) {
      this.isOver = true;
    }
    this.cdr.markForCheck();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.onLastActionRendered.emit(true);
      this.cdr.markForCheck();
    }, 0);
  }
}

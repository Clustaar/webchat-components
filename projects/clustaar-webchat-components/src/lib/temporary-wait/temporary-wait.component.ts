import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';

@Component({
  selector: 'temporary-wait-console-action',
  templateUrl: './temporary-wait.component.html',
  styleUrls: ['./temporary-wait.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemporaryWaitConsoleActionComponent implements OnInit, AfterViewInit {
  @Input() action: any;
  @Input() inverted = false;
  @Input() primaryColor = '#30B286';
  @Input() textColor = '#FFFFFF';
  @Input() autoScroll? = true;
  @Input() scrollDuration = 500;
  @Output() onLoadNextAction = new EventEmitter<boolean>();
  @Output() onLastActionRendered: EventEmitter<boolean> = new EventEmitter<boolean>();

  isOver = false;

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    if (this.autoScroll) {
      setTimeout(() => {
        let element = document.getElementById('chat-console-messages');
        if (element) {
          element.scrollTop = element.scrollHeight - element.clientHeight;
          this.cdr.markForCheck();
        }
      }, this.scrollDuration);
    }
    this.onLoadNextAction.emit(true);

    this.cdr.markForCheck();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.onLastActionRendered.emit(true);
      this.cdr.markForCheck();
    }, 0);
  }
}

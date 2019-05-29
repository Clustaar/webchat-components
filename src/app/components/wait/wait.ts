import { Component, EventEmitter, Input, OnInit, Output, AfterViewChecked } from '@angular/core';


@Component({
  selector: 'wait-console-action',
  templateUrl: './wait.html',
  styleUrls: ['./wait.scss'],
})

export class WaitConsoleActionComponent implements OnInit, AfterViewChecked {
  @Input() action: any;
  @Input() inverted: boolean = false;
  @Input() primaryColor: string = '#30B286';
  @Input() textColor: string = '#FFFFFF';
  @Input() autoScroll? = true;
  @Output() onLoadNextAction = new EventEmitter<boolean>();
  @Output() onLastActionRendered: EventEmitter<boolean> = new EventEmitter<boolean>();

  isOver: boolean = false;

  private initialActionRendered = false;

  ngOnInit() {
    if (this.autoScroll) {
      setTimeout(function () {
        let element = document.getElementById('chat-console-messages');

        if (element != null) {
          element.scrollTop = element.scrollHeight - element.clientHeight;
        }
      }, 500);
    }

    let timeoutDelay = this.action.duration * 1000;

    setTimeout(function(me) {
      // self.onActionDelayed.emit(true);
      me.onLoadNextAction.emit(true);
      // me.store.dispatch(new console_.LoadNextAction({}, me.target));
      me.isOver = true;
    }, timeoutDelay, this);

    if (this.action.isPublished != null && this.action.isPublished == true) {
      this.isOver = true;
    }
  }

  ngAfterViewChecked() {
    // Use a flag to detect view rendered in DOM only once, because `AfterViewInit` is sometimes
    // called before view is rendered
    if (!this.initialActionRendered) {
      this.initialActionRendered = true;

      this.onLastActionRendered.emit(true);
    }
  }
}

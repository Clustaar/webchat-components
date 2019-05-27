import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'wait-console-action',
  templateUrl: './wait.html',
  styleUrls: ['./wait.scss'],
})

export class WaitConsoleActionComponent implements OnInit {
  @Input() action: any;
  @Input() inverted: boolean = false;
  @Input() primaryColor: string = '#30B286';
  @Input() textColor: string = '#FFFFFF';
  @Input() autoScroll? = true;
  @Output() onLoadNextAction = new EventEmitter<boolean>();

  isOver: boolean = false;

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
}

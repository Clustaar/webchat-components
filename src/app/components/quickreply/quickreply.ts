import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'quickreply-console-action',
  templateUrl: './quickreply.html',
  styleUrls: ['./quickreply.scss'],
  encapsulation: ViewEncapsulation.None
})

export class QuickreplyConsoleActionComponent implements OnInit {
  @Input() action: any;
  @Input() primaryColor: string = '#30B286';
  @Input() textColor: string = '#FFFFFF';
  @Input() inverted: boolean = false;
  @Input() readOnly : boolean = false;
  @Output() onLoadNextAction: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onSendReply: EventEmitter<any> = new EventEmitter<any>();

  isOver: boolean = false;
  indexSelectedButton: any;
  indexHoverButton: number = -1;

  constructor() {
  }

  ngOnInit() {
    //this.store.dispatch(new console_.LoadNextAction({}, this.target));
    this.onLoadNextAction.emit(true);
    setTimeout(function () {
      let element = document.getElementById('chat-console-messages');
      if (element != null) {
        element.scrollTop = element.scrollHeight - element.clientHeight;
      }
    }, 500);
  }

  sendReply(indexSelectedButton, button) {
    if (!this.isOver) {
      this.onSendReply.emit(button.action);
      this.isOver = true;
      this.indexSelectedButton = indexSelectedButton;
    }
  }

}

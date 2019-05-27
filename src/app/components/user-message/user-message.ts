import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'user-message-console-action',
  templateUrl: './user-message.html',
  styleUrls: ['./user-message.scss'],
})

export class UserMessageConsoleActionComponent implements OnInit {
  @Input() action: any;
  @Input() inverted: boolean = false;
  @Input() autoScroll? = true;
  @Output() onLoadNextAction = new EventEmitter<boolean>();

  message: string;

  constructor() {}

  ngOnInit() {
    this.message = this.action.message;

    if (this.autoScroll) {
      setTimeout(function () {
        let element = document.getElementById('chat-console-messages');

        element.scrollTop = element.scrollHeight - element.clientHeight;
      }, 500);
    }
  }

}

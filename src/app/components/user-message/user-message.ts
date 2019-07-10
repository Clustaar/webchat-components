import { Component, EventEmitter, Input, OnInit, Output, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'user-message-console-action',
  templateUrl: './user-message.html',
  styleUrls: ['./user-message.scss'],
})

export class UserMessageConsoleActionComponent implements OnInit, AfterViewInit {
  @Input() action: any;
  @Input() inverted: boolean = false;
  @Input() autoScroll? = true;
  @Input() userBubbleColor: string = '#C5DBEA';
  @Input() userTextColor: string = '#2C3F59';
  @Output() onLoadNextAction = new EventEmitter<boolean>();
  @Output() onLastActionRendered: EventEmitter<boolean> = new EventEmitter<boolean>();

  message: string;

  constructor() { }

  ngOnInit() {
    this.message = this.action.message;

    if (this.autoScroll) {
      setTimeout(function () {
        let element = document.getElementById('chat-console-messages');

        element.scrollTop = element.scrollHeight - element.clientHeight;
      }, 500);
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.onLastActionRendered.emit(true);
    }, 0);
  }
}

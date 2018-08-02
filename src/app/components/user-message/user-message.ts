import { Component, Input, Output, OnChanges, OnInit, EventEmitter, ComponentFactoryResolver, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'user-message-console-action',
  templateUrl: './user-message.html',
  styleUrls: ['./user-message.scss'],
})

export class UserMessageConsoleActionComponent implements OnInit {
  @Input() action: any;
  @Output() onLoadNextAction: EventEmitter<boolean> = new EventEmitter<boolean>();

  public message: string;

  constructor() {}

  ngOnInit() {
    this.message = this.action.message;
    setTimeout(function(){
      let element = document.getElementById("chat-console-messages");
      element.scrollTop = element.scrollHeight - element.clientHeight;
    },500);
  }

}

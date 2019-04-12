import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'switch-console-actions',
  templateUrl: './switch.html',
  styleUrls: ['./switch.scss'],
})

export class SwitchConsoleActionsComponent implements OnInit {
  @Input() actions: any[] = [];
  @Input() action: any;
  @Input() index: number;
  @Input() primaryColor: string = "#30B286";
  @Output() onLoadNextAction: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onSendReply: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSendEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
    console.log(this.action);
  }

  loadNextAction() {
    this.onLoadNextAction.emit(true);
  }

  sendReply(reply) {
    this.onSendReply.emit(reply);
  }

  sendEvent(event) {
    this.onSendEvent.emit(event);
  }

}

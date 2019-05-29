import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'switch-console-actions',
  templateUrl: './switch.html',
  styleUrls: ['./switch.scss'],
})

export class SwitchConsoleActionsComponent {
  @Input() actions: any[] = [];
  @Input() action: any;
  @Input() index: number;
  @Input() inverted: boolean = false;
  @Input() primaryColor: string = '#30B286';
  @Input() textColor: string = '#FFFFFF';
  @Input() autoScroll? = true;
  @Output() onLoadNextAction: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onLastActionRendered: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onSendReply: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSendEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  loadNextAction() {
    this.onLoadNextAction.emit(true);
  }

  lastActionRendered() {
    this.onLastActionRendered.emit(true);
  }

  sendReply(reply) {
    this.onSendReply.emit(reply);
  }

  sendEvent(event) {
    this.onSendEvent.emit(event);
  }

}

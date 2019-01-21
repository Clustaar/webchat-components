import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'send-js-event-console-action',
  templateUrl: './send-js-event.component.html',
  styleUrls: ['./send-js-event.component.scss']
})
export class SendJsEventComponent implements OnInit {
  @Input() action: any;
  @Output() onLoadNextAction: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onSendEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    if(!this.action.isPublished) {
      this.onSendEvent.emit(this.action);
    }
    this.onLoadNextAction.emit(true);

  }

}

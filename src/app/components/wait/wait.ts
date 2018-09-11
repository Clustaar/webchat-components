import { Component,ViewChild, Input, Output, OnChanges, EventEmitter, ViewEncapsulation, OnInit } from '@angular/core';


@Component({
  selector: 'wait-console-action',
  templateUrl: './wait.html',
  styleUrls: ['./wait.scss'],
})

export class WaitConsoleActionComponent implements OnInit {
  @Input() action: any;
  @Output() onLoadNextAction: EventEmitter<boolean> = new EventEmitter<boolean>();
  public isOver: boolean = false;

  constructor() {}

  ngOnInit() {
    const self = this;
    let timeoutDelay = this.action.duration * 1000;
    if(this.action.isPublished != null && this.action.isPublished == true) {
      this.isOver = true;
    }

    setTimeout(function(me) {
      //self.onActionDelayed.emit(true);
      me.onLoadNextAction.emit(true);
      //me.store.dispatch(new console_.LoadNextAction({}, me.target));
      me.isOver = true;
    }, timeoutDelay,this);
  }
}

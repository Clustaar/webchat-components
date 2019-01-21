import { Component, Input, Output, OnChanges, OnInit, EventEmitter, ComponentFactoryResolver, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'quickreply-console-action',
  templateUrl: './quickreply.html',
  styleUrls: ['./quickreply.scss'],
  encapsulation: ViewEncapsulation.None
})

export class QuickreplyConsoleActionComponent implements OnInit {
  @Input() action: any;
  @Input() primaryColor: string = "#30B286";
  @Output() onLoadNextAction: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onSendReply: EventEmitter<any> = new EventEmitter<any>();

  isOver: boolean = false;
  indexSelectedButton: any;
  indexHoverButton: number = -1;

  constructor() {}

  ngOnInit() {
    //this.store.dispatch(new console_.LoadNextAction({}, this.target));
    this.onLoadNextAction.emit(true);
    setTimeout(function(){
      let element = document.getElementById("chat-console-messages");
      if(element != null) {
        element.scrollTop = element.scrollHeight - element.clientHeight;
      }
    },500);
    //let styleSheet:any = document.styleSheets[0];
    //styleSheet.insertRule(`.bubble.bot:after { border-right-color: ${this.primaryColor}; }`, styleSheet.cssRules.length);

  }

  sendReply(indexSelectedButton, button) {
    if(!this.isOver) {
      this.onSendReply.emit(button.action);
      this.isOver = true;
      this.indexSelectedButton = indexSelectedButton;
    }
    
  }

}

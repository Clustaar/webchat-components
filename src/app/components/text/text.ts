import { Component, Input, Output, OnChanges, OnInit, AfterViewInit,  EventEmitter, ComponentFactoryResolver, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'text-console-action',
  templateUrl: './text.html',
  styleUrls: ['./text.scss'],
})

export class TextConsoleActionComponent implements OnInit, AfterViewInit {
  @Input() indexAction: number;
  @Input() action: any;
  @Input() primaryColor: string = "#30B286";
  @Output() onLoadNextAction: EventEmitter<boolean> = new EventEmitter<boolean>();
  public message: string;

  constructor() {}

  ngOnInit() {
    this.message = this.randomAlternative();
    this.onLoadNextAction.emit(true);
    //this.store.dispatch(new console_.LoadNextAction({}, this.target));
    setTimeout(function(){
      let element = document.getElementById("chat-console-messages");
      if(element != null) {
        element.scrollTop = element.scrollHeight - element.clientHeight;
      }
      
    },500);

  }

  ngAfterViewInit() {
    Array.from(document.querySelectorAll(".text-message-"+this.indexAction + " a")).forEach(function(a){
      if(a.getAttribute('target') == null) {
        a.setAttribute('target', '_blank');
      }
    })
  }


  private randomAlternative() {
    let rand = 0;

    if (this.action.alternatives.length > 1) {
      rand = Math.floor(Math.random() * this.action.alternatives.length);
    }

    return this.action.alternatives[rand];
  }
}

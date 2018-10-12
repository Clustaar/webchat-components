import { Component, forwardRef, Renderer2, ViewChild, Input, Output, OnChanges, OnDestroy, OnInit, EventEmitter,
  ComponentFactoryResolver, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'image-console-action',
  templateUrl: './image.html',
  styleUrls: ['./image.scss'],
})

export class ImageConsoleActionComponent implements OnInit {
  @Input() action: any;
  @Input() primaryColor: string = "#30B286";
  @Output() onLoadNextAction: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {
    //this.store.dispatch(new console_.LoadNextAction({}, this.target));
    this.onLoadNextAction.emit(true);
    setTimeout(function(){
      let element = document.getElementById("chat-console-messages");
      element.scrollTop = element.scrollHeight - element.clientHeight;
    },500);
    
  }

}

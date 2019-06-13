import { Component, Input, Output, OnInit, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'image-console-action',
  templateUrl: './image.html',
  styleUrls: ['./image.scss'],
})
export class ImageConsoleActionComponent implements OnInit, AfterViewInit {
  @Input() action: any;
  @Input() inverted: boolean = false;
  @Input() primaryColor: string = '#30B286';
  @Input() autoScroll? = true;
  @Output() onLoadNextAction: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onLastActionRendered: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    //this.store.dispatch(new console_.LoadNextAction({}, this.target));
    this.onLoadNextAction.emit(true);

    if (this.autoScroll) {
      setTimeout(function() {
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

import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'text-console-action',
  templateUrl: './text.html',
  styleUrls: ['./text.scss'],
})

export class TextConsoleActionComponent implements OnInit, AfterViewInit {
  @Input() indexAction: number;
  @Input() action: any;
  @Input() inverted: boolean = false;
  @Input() primaryColor: string = '#30B286';
  @Input() textColor: string = '#FFFFFF';
  @Output() onLoadNextAction: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
    this.onLoadNextAction.emit(true);

    setTimeout(function () {
      let element = document.getElementById('chat-console-messages');
      if (element != null) {
        element.scrollTop = element.scrollHeight - element.clientHeight;
      }

    }, 500);
  }

  ngAfterViewInit() {
    Array.from(document.querySelectorAll('.text-message-' + this.indexAction + ' a')).forEach(function (a) {
      if (a.getAttribute('target') == null) {
        a.setAttribute('target', '_blank');
      }
    })
  }

}

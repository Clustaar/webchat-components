import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'text-console-action',
  templateUrl: './text.html',
  styleUrls: ['./text.scss'],
})
export class TextConsoleActionComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @Input() indexAction: number;
  @Input() action: any;
  @Input() inverted: boolean = false;
  @Input() primaryColor: string = '#30B286';
  @Input() textColor: string = '#FFFFFF';
  @Input() autoScroll? = true;
  @Output() onLoadNextAction: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onLastActionRendered: EventEmitter<boolean> = new EventEmitter<boolean>();

  private initialActionRendered = false;

  constructor() {}

  ngOnInit() {
    this.onLoadNextAction.emit(true);

    if (this.autoScroll) {
      setTimeout(function() {
        let element = document.getElementById('chat-console-messages');

        if (element != null) {
          element.scrollTop = element.scrollHeight - element.clientHeight;
        }
      }, 500);
    }
  }

  ngAfterViewInit() {
    Array.from(document.querySelectorAll('.text-message-' + this.indexAction + ' a')).forEach(function(a) {
      if (a.getAttribute('target') == null) {
        a.setAttribute('target', '_blank');
      }
    });
  }

  ngAfterViewChecked() {
    // Use a flag to detect view rendered in DOM only once, because `AfterViewInit` is sometimes
    // called before view is rendered
    if (!this.initialActionRendered) {
      this.initialActionRendered = true;

      this.onLastActionRendered.emit(true);
    }
  }
}

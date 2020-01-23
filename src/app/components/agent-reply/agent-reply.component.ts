import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'agent-reply-console-action',
  templateUrl: './agent-reply.component.html',
  styleUrls: ['./agent-reply.component.scss']
})
export class AgentReplyComponent implements OnInit, AfterViewInit {
  @Input() indexAction: number;
  @Input() action: any;
  @Input() inverted: boolean = false;
  @Input() primaryColor: string = '#30B286';
  @Input() textColor: string = '#FFFFFF';
  @Input() autoScroll? = true;
  @Output() onLoadNextAction: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onLastActionRendered: EventEmitter<boolean> = new EventEmitter<boolean>();

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
    Array.from(document.querySelectorAll('.agent-reply-message-' + this.indexAction + ' a')).forEach(a => {
      if (a.getAttribute('target') == null) {
        a.setAttribute('target', '_blank');
      }
    });

    setTimeout(() => {
      this.onLastActionRendered.emit(true);
    }, 0);
  }

}
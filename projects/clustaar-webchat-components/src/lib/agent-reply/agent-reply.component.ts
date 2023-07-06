import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SecurityContext
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'agent-reply-console-action',
  templateUrl: './agent-reply.component.html',
  styleUrls: ['./agent-reply.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgentReplyComponent implements OnInit, AfterViewInit {
  @Input() indexAction: number;
  @Input() action: any;
  @Input() inverted = false;
  @Input() primaryColor = '#30B286';
  @Input() textColor = '#FFFFFF';
  @Input() autoScroll? = true;
  @Input() scrollDuration = 500;
  @Output() onLoadNextAction: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() onLastActionRendered: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  message: SafeHtml;

  constructor(
    private cdr: ChangeDetectorRef,
    protected sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.onLoadNextAction.emit(true);
    this.message = this.sanitizer.sanitize(
      SecurityContext.HTML,
      this.action.message
    );

    if (this.autoScroll) {
      setTimeout(() => {
        let element = document.getElementById('chat-console-messages');
        if (element) {
          element.scrollTop = element.scrollHeight - element.clientHeight;
          this.cdr.markForCheck();
        }
      }, this.scrollDuration);
    }
  }

  ngAfterViewInit() {
    Array.from(
      document.querySelectorAll(
        '.agent-reply-message-' + this.indexAction + ' a'
      )
    ).forEach((a) => {
      if (a.getAttribute('target') == null) {
        a.setAttribute('target', '_blank');
      }
    });
    this.cdr.markForCheck();

    setTimeout(() => {
      this.onLastActionRendered.emit(true);
    }, 0);
  }
}

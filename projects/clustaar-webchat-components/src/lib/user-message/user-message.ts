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
  selector: 'user-message-console-action',
  templateUrl: './user-message.html',
  styleUrls: ['./user-message.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserMessageConsoleActionComponent
  implements OnInit, AfterViewInit
{
  @Input() action: any;
  @Input() inverted: boolean = false;
  @Input() autoScroll? = true;
  @Input() userBubbleColor: string = '#C5DBEA';
  @Input() userTextColor: string = '#2C3F59';
  @Output() onLoadNextAction = new EventEmitter<boolean>();
  @Output() onLastActionRendered: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  message: SafeHtml;

  constructor(
    private cdr: ChangeDetectorRef,
    protected sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.message = this.sanitizer.sanitize(
      SecurityContext.HTML,
      this.action.message
    );
    if (this.autoScroll) {
      setTimeout(() => {
        let element = document.getElementById('chat-console-messages');
        if (element != null) {
          element.scrollTop = element.scrollHeight - element.clientHeight;
          this.cdr.markForCheck();
        }
      }, 500);
    }
    this.cdr.markForCheck();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.onLastActionRendered.emit(true);
      this.cdr.markForCheck();
    }, 0);
  }
}

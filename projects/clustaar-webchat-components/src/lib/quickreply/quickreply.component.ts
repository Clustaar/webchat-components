import {
  AfterViewInit,
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'quickreply-console-action',
  templateUrl: './quickreply.component.html',
  styleUrls: ['./quickreply.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuickreplyConsoleActionComponent implements OnInit, AfterViewInit {
  @Input() action: any;
  @Input() primaryColor = '#30B286';
  @Input() textColor = '#FFFFFF';
  @Input() inverted = false;
  @Input() readOnly = false;
  @Input() autoScroll? = true;
  @Input() indexAction: number;
  @Input() showSelectedButton = true;
  @Input() userBubbleColor = '#C5DBEA';
  @Input() userTextColor = '#2C3F59';
  @Input() scrollDuration = 500;
  @Output() onLoadNextAction: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() onSendReply: EventEmitter<any> = new EventEmitter<any>();
  @Output() onLastActionRendered: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  isOver = false;
  indexSelectedButton: any;
  indexHoverButton = -1;

  constructor(private cdr: ChangeDetectorRef, private app: ApplicationRef) {}

  ngOnInit() {
    this.onLoadNextAction.emit(true);

    if (this.autoScroll) {
      setTimeout(() => {
        let element = document.getElementById('chat-console-messages');

        if (element != null) {
          element.scrollTop = element.scrollHeight - element.clientHeight;
          this.cdr.markForCheck();
        }
      }, this.scrollDuration);
    }
  }

  ngAfterViewInit() {
    Array.from(
      document.querySelectorAll(
        '.quickreply-message-' + this.indexAction + ' a'
      )
    ).forEach(function (a) {
      if (a.getAttribute('target') == null) {
        a.setAttribute('target', '_blank');
      }
    });
    setTimeout(() => {
      this.onLastActionRendered.emit(true);
    }, 0);

    if (this.action.selected) {
      const indexSelectedButton = this.action.buttons.findIndex(
        (actionButton) => actionButton.title === this.action.selected.title
      );
      if (indexSelectedButton >= 0) {
        this.isOver = true;
        this.indexSelectedButton = indexSelectedButton;

        this.detectChanges();
      }
    }
    this.cdr.markForCheck();
  }

  sendReply(indexSelectedButton, button) {
    if (!this.isOver) {
      this.action.selected = button;
      this.onSendReply.emit(button);
      this.isOver = true;
      this.indexSelectedButton = indexSelectedButton;
      this.detectChanges();
    }
  }

  onMouseEnter(i) {
    this.indexHoverButton = i;
    this.detectChanges();
  }

  onMouseLeave() {
    this.indexHoverButton = -1;
    this.detectChanges();
  }

  detectChanges() {
    this.cdr.markForCheck();
    this.app.tick();
  }
}

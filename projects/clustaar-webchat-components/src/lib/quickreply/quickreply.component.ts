import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
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
  @Output() onLoadNextAction: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onSendReply: EventEmitter<any> = new EventEmitter<any>();
  @Output() onLastActionRendered: EventEmitter<boolean> = new EventEmitter<boolean>();

  isOver = false;
  indexSelectedButton: any;
  indexHoverButton = -1;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.onLoadNextAction.emit(true);

    if (this.autoScroll) {
      setTimeout( () => {
        let element = document.getElementById('chat-console-messages');

        if (element != null) {
          element.scrollTop = element.scrollHeight - element.clientHeight;
          this.cdr.markForCheck();
        }
      }, 500);
    }
  }

  ngAfterViewInit() {
    Array.from(document.querySelectorAll('.quickreply-message-' + this.indexAction + ' a')).forEach(function (a) {
      if (a.getAttribute('target') == null) {
        a.setAttribute('target', '_blank');
      }
    });
    setTimeout(() => {
      this.onLastActionRendered.emit(true);
    }, 0);
    this.cdr.markForCheck();
  }

  sendReply(indexSelectedButton, button) {
    if (!this.isOver) {
      this.onSendReply.emit(button.action);
      this.isOver = true;
      this.indexSelectedButton = indexSelectedButton;
      this.cdr.markForCheck();
    }
  }

}

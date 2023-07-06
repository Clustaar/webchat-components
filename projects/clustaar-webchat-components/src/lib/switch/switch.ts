import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'switch-console-actions',
  templateUrl: './switch.html',
  styleUrls: ['./switch.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SwitchConsoleActionsComponent {
  @Input() actions: any[] = [];
  @Input() action: any;
  @Input() index: number;
  @Input() inverted = false;
  @Input() primaryColor = '#30B286';
  @Input() textColor = '#FFFFFF';
  @Input() userBubbleColor = '#C5DBEA';
  @Input() userTextColor = '#2C3F59';
  @Input() autoScroll? = true;
  @Input() disabled? = false;
  @Input() showSelectedButton = true;
  @Input() scrollDuration = 500;
  @Output() onLoadNextAction: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onLastActionRendered: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onSendReply: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSendEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() onImageClicked = new EventEmitter<string>();
  @Output() onLinkClicked = new EventEmitter<{ url: string, label: string }>();

  constructor() {
  }

  loadNextAction(): void {
    this.onLoadNextAction.emit(true);
  }

  lastActionRendered(): void {
    this.onLastActionRendered.emit(true);
  }

  sendReply(reply): void {
    this.onSendReply.emit(reply);
  }

  sendEvent(event): void {
    this.onSendEvent.emit(event);
  }
}

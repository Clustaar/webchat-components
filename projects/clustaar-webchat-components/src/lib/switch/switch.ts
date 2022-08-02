import { Target } from '@angular/compiler';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Choice } from '../list/list.model';

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
  @Input() showSelectedButton = true;
  @Output() onLoadNextAction: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onLastActionRendered: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onSendReply: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSendEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() onImageClicked = new EventEmitter<string>();
  @Output() onLinkClicked = new EventEmitter<{ url: string, label: string }>();
  @Output() onChoiceSelected = new EventEmitter<{selectedChoice: Choice, target: Target}>();

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

  choiceSelected(event: {selectedChoice: Choice, target: Target}): void {
    this.onChoiceSelected.emit(event);
  }
}

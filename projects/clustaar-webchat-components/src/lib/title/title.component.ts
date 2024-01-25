import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'title-console-action',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent implements OnInit, AfterViewInit {
  @Input() indexAction: number;
  @Input() action: any;
  @Input() autoScroll? = true;
  @Input() scrollDuration = 500;
  @Output() onLoadNextAction: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onLastActionRendered: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.onLoadNextAction.emit(true);

    if (this.autoScroll) {
      setTimeout(() => {
        let element = document.getElementById('chat-console-messages');

        if (element != null) {
          element.scrollTop = element.scrollHeight - element.clientHeight;
        }
        this.cdr.markForCheck();
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

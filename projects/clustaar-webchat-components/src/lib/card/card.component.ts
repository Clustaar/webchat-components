import {
  AfterViewInit, ApplicationRef,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

import { SwiperComponent, SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'card-console-action',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardConsoleActionComponent implements OnInit, AfterViewInit {
  @Input() action: any;
  @Input() primaryColor = '#30B286';
  @Input() textColor = '#FFFFFF';
  @Input() autoScroll? = true;
  @Input() readOnly = false;
  @Output() onLoadNextAction: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onSendReply: EventEmitter<any> = new EventEmitter<any>();
  @Output() onLastActionRendered: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('swiperCards') swiperCards: SwiperComponent;

  public isOver = false;
  public indexSelectedButton: any;
  public indexHoverButton = -1;
  public currentCardIndex = 0;
  SWIPER_CONFIG: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    threshold: 10,
    loop: true
  };

  public message: string;

  constructor(private cdr: ChangeDetectorRef, private app: ApplicationRef) {
  }

  ngOnInit() {
    this.onLoadNextAction.emit(true);

    if (this.autoScroll) {
      setTimeout(() => {
        let element = document.getElementById('chat-console-messages');
        if (element) {
          element.scrollTop = element.scrollHeight - element.clientHeight;
          this.cdr.markForCheck();
        }

      }, 500);
    }

    if (this.action.cards.length < 3) {
      this.SWIPER_CONFIG.loop = false;
      this.cdr.markForCheck();
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.onLastActionRendered.emit(true);
    }, 0);
  }

  onSwiperIndexChange(event) {
    this.currentCardIndex = event;
    this.detectChanges();
  }

  /** Move to the next card using right arrow */
  nextCard() {
    if (this.isArrowRightDisabled()) return;
    this.swiperCards.directiveRef.nextSlide(300);
    this.swiperCards.directiveRef!!.update();
    this.detectChanges();
  }

  /** Move to the previous card using left arrow */
  previousCard() {
    if (this.currentCardIndex <= 0) return;
    this.swiperCards.directiveRef.prevSlide(300);
    this.swiperCards.directiveRef!!.update();
    this.detectChanges();
  }

  sendReply(indexSelectedButton, button, event) {
    if (!this.isOver) {
      this.onSendReply.emit(button.action);
      this.isOver = true;
      this.indexSelectedButton = indexSelectedButton;
      this.detectChanges();
    }
    event.stopPropagation();
  };

  openUrl(button, event) {
    window.open(button.action.url, '_blank');
    event.stopPropagation();
  }

  openCardUrl(card) {
    if (card.url != '') {
      window.open(card.url, '_blank');
    }
  }

  isArrowRightDisabled() {
    return this.action.cards.length === (this.currentCardIndex + 1);
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

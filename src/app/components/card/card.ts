import {
  AfterViewInit,
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
  templateUrl: './card.html',
  styleUrls: ['./card.scss'],
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
    loop: true
  };

  public message: string;

  constructor(private cdr: ChangeDetectorRef) {
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
    this.cdr.markForCheck();
  }

  /** Move to the next card using right arrow */
  nextCard() {
    if (this.isArrowRightDisabled()) return;
    this.swiperCards.directiveRef.nextSlide(300);
    this.swiperCards.directiveRef!!.update();
    this.cdr.markForCheck();
  }

  /** Move to the previous card using left arrow */
  previousCard() {
    if (this.isArrowLeftDisabled()) return;
    this.swiperCards.directiveRef.prevSlide(300);
    this.swiperCards.directiveRef!!.update();
    this.cdr.markForCheck();
  }

  sendReply(indexSelectedButton, button) {
    if (!this.isOver) {
      this.onSendReply.emit(button.action);
      this.isOver = true;
      this.indexSelectedButton = indexSelectedButton;
      this.cdr.markForCheck();
    }
  };

  openUrl(button) {
      window.open(button.action.url, '_blank');
  }

  openCardUrl(card) {
    if (card.url != '') {
        window.open(card.url, '_blank');
    }
  }

  isArrowRightDisabled() {
    return this.action.cards.length === (this.currentCardIndex + 1);
  }

  isArrowLeftDisabled() {
    return this.currentCardIndex <= 0;
  }
}

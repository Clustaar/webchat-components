import {
  AfterViewInit,
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
  selector: 'simple-card-console-action',
  templateUrl: './simple-card.html',
  styleUrls: ['./simple-card.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SimpleCardConsoleActionComponent implements OnInit, AfterViewInit {
  @Input() action: any;
  @Input() primaryColor: string = '#30B286';
  @Input() textColor: string = '#FFFFFF';
  @Input() autoScroll? = true;
  @Input() readOnly: boolean = false;
  @Output() onLoadNextAction: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onSendReply: EventEmitter<any> = new EventEmitter<any>();
  @Output() onLastActionRendered: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('swiperCards', { static: false }) swiperCards: SwiperComponent;

  public isOver: boolean = false;
  public indexSelectedButton: any;
  public indexHoverButton: number = -1;
  public currentCardIndex: number = 0;
  SWIPER_CONFIG: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true
  };

  public message: string;

  constructor() {
  }

  ngOnInit() {
    //this.store.dispatch(new console_.LoadNextAction({}, this.target));
    this.onLoadNextAction.emit(true);

    if (this.autoScroll) {
      setTimeout(function () {
        let element = document.getElementById('chat-console-messages');

        element.scrollTop = element.scrollHeight - element.clientHeight;
      }, 500);
    }

    if (this.action.cards.length < 3) {
      this.SWIPER_CONFIG.loop = false;
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.onLastActionRendered.emit(true);
    }, 0);
  }

  onSwiperIndexChange(event) {
    this.currentCardIndex = event;
  }

  /** Move to the next card using right arrow */
  nextCard() {
    if (this.isArrowRightDisabled()) return;
    this.swiperCards.directiveRef.nextSlide(300);
    this.swiperCards.directiveRef!!.update();
  }

  /** Move to the previous card using left arrow */
  previousCard() {
    if (this.isArrowLeftDisabled()) return;
    this.swiperCards.directiveRef.prevSlide(300);
    this.swiperCards.directiveRef!!.update();
  }

  sendReply(indexSelectedButton, button) {
    if (!this.isOver) {
      this.onSendReply.emit(button.action);
      this.isOver = true;
      this.indexSelectedButton = indexSelectedButton;
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

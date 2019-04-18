import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';

import { SwiperComponent, SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'card-console-action',
  templateUrl: './card.html',
  styleUrls: ['./card.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CardConsoleActionComponent implements OnInit {
  @Input() action: any;
  @Input() primaryColor: string = '#30B286';
  @Input() textColor: string = '#FFFFFF';
  @Output() onLoadNextAction: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onSendReply: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('swiperCards') swiperCards: SwiperComponent;

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
    setTimeout(function () {
      let element = document.getElementById('chat-console-messages');
      element.scrollTop = element.scrollHeight - element.clientHeight;
    }, 500);
    if (this.action.cards.length < 3) {
      this.SWIPER_CONFIG.loop = false;
    }
  }

  onSwiperIndexChange(event) {
    this.currentCardIndex = event;
  }

  /** Move to the next card using right arrow */
  nextCard() {
    this.swiperCards.directiveRef.nextSlide(300);
    this.swiperCards.directiveRef!!.update();
  }

  /** Move to the previous card using left arrow */
  previousCard() {
    this.swiperCards.directiveRef.prevSlide(300);
    this.swiperCards.directiveRef!!.update();
  }

  sendReply(indexSelectedButton, button) {
    if (!this.isOver) {
      //this.win.analytics.track('Send Reply', {'type': 'go_to'});
      this.onSendReply.emit(button.action);
      //this.store.dispatch(new console_.SendReplyAction(button.action, this.target));
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

}

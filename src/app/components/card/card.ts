import { Component, Input, Output, OnChanges, OnInit, EventEmitter, ComponentFactoryResolver, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { SwiperConfigInterface, SwiperComponent } from 'ngx-swiper-wrapper';

import * as fromRoot from '../../../../reducers';
import * as actions_ from '../../../../actions/actions.actions';
import * as console_ from '../../../../actions/console.actions';
import { ConsoleTarget } from '../../../../models/';



@Component({
  selector: 'card-console-action',
  templateUrl: './card.html',
  styleUrls: ['./card.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CardConsoleActionComponent implements OnInit {
  @Input() action: any;
  @Input() target: ConsoleTarget = "TEST_CONSOLE";
  @ViewChild('swiperCards') swiperCards: SwiperComponent;

  public isOver: boolean = false;
  public indexSelectedButton: any;
  public currentCardIndex: number = 0;
  SWIPER_CONFIG: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    loop: false
  };


  public message: string;
  private win: any = window;


  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.store.dispatch(new console_.LoadNextAction({}, this.target));
    setTimeout(function(){
      let element = document.getElementById("chat-console-messages");
      element.scrollTop = element.scrollHeight - element.clientHeight;
    },500);
    if(this.action.cards.length < 3 ) {
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

  sendReply(button) {
    this.win.analytics.track('Send Reply', {'type': 'go_to'});
    this.store.dispatch(new console_.SendReplyAction(button.action, this.target));
  };

  openUrl(button) {
    window.open(button.action.url, '_blank');
  }

  openCardUrl(card) {
    if(card.url != "") {
      window.open(card.url, '_blank');
    }
    
  }

}

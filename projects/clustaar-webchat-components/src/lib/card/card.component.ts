import {
  AfterViewInit,
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";

import { Swiper } from "swiper/types";

@Component({
  selector: "card-console-action",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardConsoleActionComponent implements OnInit, AfterViewInit {
  @Input() action: any;
  @Input() primaryColor = "#30B286";
  @Input() textColor = "#FFFFFF";
  @Input() autoScroll? = true;
  @Input() readOnly = false;
  @Output() onLoadNextAction: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() onSendReply: EventEmitter<any> = new EventEmitter<any>();
  @Output() onLastActionRendered: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() onLinkClicked: EventEmitter<{ url: string; label: string }> =
    new EventEmitter<{ url: string; label: string }>();

  @ViewChild("swiperCards") swiperCards: ElementRef | undefined;
  swiper?: Swiper;

  public isOver = false;
  public indexSelectedButton: any;
  public indexHoverButton = -1;
  SWIPER_CONFIG = {
    direction: "horizontal",
    slidesPerView: 1,
    threshold: 10,
    loop: true,
  };

  public message: string;

  constructor(private cdr: ChangeDetectorRef, private app: ApplicationRef) {}

  ngOnInit() {
    this.onLoadNextAction.emit(true);

    if (this.autoScroll) {
      setTimeout(() => {
        let element = document.getElementById("chat-console-messages");
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
    this.swiper = this.swiperCards?.nativeElement.swiper;

    setTimeout(() => {
      this.onLastActionRendered.emit(true);
    }, 0);
  }

  /** Move to the next card using right arrow */
  nextCard() {
    if (this.isArrowRightDisabled()) return;
    this.swiper.slideNext(300);
    this.swiper.update();
    this.detectChanges();
  }

  /** Move to the previous card using left arrow */
  previousCard() {
    if (this.swiper?.activeIndex <= 0) return;
    this.swiper.slidePrev(300);
    this.swiper.update();
    this.detectChanges();
  }

  sendReply(indexSelectedButton, button, event) {
    if (!this.isOver) {
      this.onSendReply.emit(button);
      this.isOver = true;
      this.indexSelectedButton = indexSelectedButton;
      this.detectChanges();
    }
    event.stopPropagation();
  }

  openUrl(button, event) {
    window.open(button.action.url, "_blank");
    this.onLinkClicked.emit({ url: button.action.url, label: button.title });
    event.stopPropagation();
  }

  openCardUrl(card) {
    if (card.url != "") {
      window.open(card.url, "_blank");
      this.onLinkClicked.emit({ url: card.url, label: card.title });
    }
  }

  isArrowRightDisabled() {
    return this.action.cards.length === this.swiper?.activeIndex + 1;
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

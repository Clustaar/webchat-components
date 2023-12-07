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
  selector: "simple-card-console-action",
  templateUrl: "./simple-card.html",
  styleUrls: ["./simple-card.scss"],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleCardConsoleActionComponent implements OnInit, AfterViewInit {
  @Input() action: any;
  @Input() primaryColor: string = "#30B286";
  @Input() textColor: string = "#FFFFFF";
  @Input() autoScroll? = true;
  @Input() readOnly: boolean = false;
  @Output() onLoadNextAction: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() onSendReply: EventEmitter<any> = new EventEmitter<any>();
  @Output() onLastActionRendered: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  @ViewChild("swiperCards") swiperCards: ElementRef | undefined;
  swiper?: Swiper;

  public isOver: boolean = false;
  public indexSelectedButton: any;
  public indexHoverButton: number = -1;
  SWIPER_CONFIG = {
    direction: "horizontal",
    slidesPerView: 1,
    loop: true,
  };

  public message: string;

  constructor(private cdr: ChangeDetectorRef, private app: ApplicationRef) {}

  ngOnInit() {
    //this.store.dispatch(new console_.LoadNextAction({}, this.target));
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
    }
    this.cdr.markForCheck();
  }

  ngAfterViewInit() {
    this.swiper = this.swiperCards?.nativeElement.swiper;

    setTimeout(() => {
      this.onLastActionRendered.emit(true);
      this.cdr.markForCheck();
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
    if (this.isArrowLeftDisabled()) return;
    this.swiper.slidePrev(300);
    this.swiper.update();
    this.detectChanges();
  }

  sendReply(indexSelectedButton, button) {
    if (!this.isOver) {
      this.onSendReply.emit(button);
      this.isOver = true;
      this.indexSelectedButton = indexSelectedButton;
      this.detectChanges();
    }
  }

  openUrl(button) {
    window.open(button.action.url, "_blank");
  }

  openCardUrl(card) {
    if (card.url != "") {
      window.open(card.url, "_blank");
    }
  }

  isArrowRightDisabled() {
    return this.action.cards.length === this.swiper?.activeIndex + 1;
  }

  isArrowLeftDisabled() {
    return this.swiper?.activeIndex <= 0;
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

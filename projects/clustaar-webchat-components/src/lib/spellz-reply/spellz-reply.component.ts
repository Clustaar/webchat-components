import {
  AfterViewInit,
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SecurityContext,
  ViewChild
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SwiperComponent, SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'spellz-reply-console-action',
  templateUrl: './spellz-reply.component.html',
  styleUrls: ['./spellz-reply.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpellzReplyComponent implements OnInit, AfterViewInit {
  @Input() indexAction: number;
  @Input() action: any;
  @Input() inverted = false;
  @Input() primaryColor = '#30B286';
  @Input() textColor = '#FFFFFF';
  @Input() autoScroll? = true;
  @Output() onLoadNextAction: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() onLastActionRendered: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() onLinkClicked: EventEmitter<{ url: string, label: string }> = new EventEmitter<{ url: string, label: string }>();


  @ViewChild('swiperSources') swiperSources: SwiperComponent;  
  message: SafeHtml;

  public currentSourceIndex = 0;
  SWIPER_CONFIG: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    threshold: 10,
    loop: true
  };
  showSource = true;
  sourceTitleLimit = 50;
  sourceTextLimit = 180;

  constructor(
    private cdr: ChangeDetectorRef,
    private app: ApplicationRef,
    protected sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.onLoadNextAction.emit(true);
    this.message = this.sanitizer.sanitize(
      SecurityContext.HTML,
      this.action.replyMessage
    );
    
    for(let resource of this.action.resources) {
      resource.limitedTitle = this.truncate(resource.title, this.sourceTitleLimit, true);
      resource.showMore = false;
      if(resource.text == null || resource.text?.length == 0 ) {
        resource.text = this.message;
      }

      resource.limitedText = this.truncate(resource.text, this.sourceTextLimit, true);
      
    }


    if (this.autoScroll) {
      setTimeout(() => {
        let element = document.getElementById('chat-console-messages');
        if (element) {
          element.scrollTop = element.scrollHeight - element.clientHeight;
          this.cdr.markForCheck();
        }
      }, 500);
    }

    
  }

  truncate( str, n, useWordBoundary ){
    if (str.length <= n) { return str; }
    const subString = str.slice(0, n-1); // the original check
    return (useWordBoundary 
      ? subString.slice(0, subString.lastIndexOf(" ")) 
      : subString);
  };

  ngAfterViewInit() {
    Array.from(
      document.querySelectorAll(
        '.agent-reply-message-' + this.indexAction + ' a'
      )
    ).forEach((a) => {
      if (a.getAttribute('target') == null) {
        a.setAttribute('target', '_blank');
      }
    });
    this.cdr.markForCheck();

    setTimeout(() => {
      this.onLastActionRendered.emit(true);
    }, 0);
  }

  toggleSource() {
    this.showSource = !this.showSource;
    this.detectChanges();
  }

  onSwiperIndexChange(event) {
    this.currentSourceIndex = event;
    this.detectChanges();
  }

  nextSource() {
    if (this.isArrowRightDisabled()) return;
    this.swiperSources.directiveRef.nextSlide(300);
    this.swiperSources.directiveRef!!.update();
    this.detectChanges();
  }

  /** Move to the previous card using left arrow */
  previousSource() {
    if (this.currentSourceIndex <= 0) return;
    this.swiperSources.directiveRef.prevSlide(300);
    this.swiperSources.directiveRef!!.update();
    this.detectChanges();
  }

  openSourceUrl(source) {
    if (source.url != null && source.url.length > 0) {
      window.open(source.url, '_blank');
      this.onLinkClicked.emit({ url: source.url, label: source.title });
    }
  }

  showMore(source) {
    source.showMore = true;
    this.detectChanges();
  }

  isArrowRightDisabled() {
    return this.action.resources.length === (this.currentSourceIndex + 1);
  }

  detectChanges() {
    this.cdr.markForCheck();
    this.app.tick();
  }
}

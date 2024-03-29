import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'text-console-action',
  templateUrl: './text.html',
  styleUrls: ['./text.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextConsoleActionComponent implements OnInit, AfterViewInit {
  @Input() indexAction: number;
  @Input() action: any;
  @Input() inverted: boolean = false;
  @Input() primaryColor: string = '#30B286';
  @Input() textColor: string = '#FFFFFF';
  @Input() autoScroll? = true;
  @Input() scrollDuration = 500;
  @Output() onLoadNextAction = new EventEmitter<boolean>();
  @Output() onLastActionRendered = new EventEmitter<boolean>();
  @Output() onLinkClicked = new EventEmitter<{ url: string; label: string }>();

  @ViewChild('textElement') textElement: ElementRef;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.onLoadNextAction.emit(true);

    if (this.autoScroll) {
      setTimeout(() => {
        let element = document.getElementById('chat-console-messages');
        if (element != null) {
          element.scrollTop = element.scrollHeight - element.clientHeight;
          this.cdr.markForCheck();
        }
      }, 500);
    }
    this.cdr.markForCheck();
  }

  ngAfterViewInit() {
    this.textElement.nativeElement.onclick = (event) => {
      if (event.target.href && event.target.nodeName === 'A') {
        this.onLinkClicked.emit({
          url: event.target.href,
          label: event.target.innerText
        });
      }
    };

    Array.from(document.querySelectorAll('.text-message-' + this.indexAction + ' a')).forEach(function (a) {
      if (a.getAttribute('target') == null) {
        a.setAttribute('target', '_blank');
      }
    });
    this.cdr.markForCheck();

    setTimeout(() => {
      this.onLastActionRendered.emit(true);
      this.cdr.markForCheck();
    }, 0);
  }
}

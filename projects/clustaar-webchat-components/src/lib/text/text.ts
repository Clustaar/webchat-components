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

type ParsedPart = {
  type: 'text' | 'image';
  value: string;
};

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
  @Input() inverted = false;
  @Input() primaryColor = '#30B286';
  @Input() textColor = '#FFFFFF';
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

  parseTextWithImages(text: string): ParsedPart[] {
    const imageTagRegex = /<image>(.*?)<\/image>/g;
    const parts: ParsedPart[] = [];
    let lastIndex = 0;

    // Recherche de chaque balise image
    let match;
    while ((match = imageTagRegex.exec(text)) !== null) {
      // Texte avant l'image actuelle
      const textBeforeImage = text.slice(lastIndex, match.index).trim();
      if (textBeforeImage) {
        parts.push({ type: 'text', value: textBeforeImage });
      }

      // URL de l'image actuelle
      const imageUrl = match[1];
      parts.push({ type: 'image', value: imageUrl });

      // Mettre à jour l'index de la dernière position analysée
      lastIndex = match.index + match[0].length;
    }

    // Texte après la dernière image
    const textAfterLastImage = text.slice(lastIndex).trim();
    if (textAfterLastImage) {
      parts.push({ type: 'text', value: textAfterLastImage });
    }

    return parts;
  }
}

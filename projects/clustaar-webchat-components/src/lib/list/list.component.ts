import {
  AfterViewInit,
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Choice, List, Section } from './list.model';
import { Observable } from 'rxjs';
import { map, startWith, skip } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'list-action',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit, AfterViewInit {
  @Input() action: List;
  @Input() inverted = false;
  @Input() primaryColor = '#30B286';
  @Input() textColor = '#FFFFFF';
  @Input() userBubbleColor = '#C5DBEA';
  @Input() userTextColor = '#2C3F59';
  @Input() autoScroll? = true;

  @Output() onSendReply = new EventEmitter<any>();
  @Output() onLoadNextAction = new EventEmitter<boolean>();
  @Output() onLastActionRendered: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  filteredSections$: Observable<Section[]> = new Observable<[]>();
  filteredSections = [];
  selectedChoice: string;
  inputControl = new FormControl('');

  constructor(private cdr: ChangeDetectorRef, private app: ApplicationRef) {}

  ngOnInit(): void {
    this.onLoadNextAction.emit(true);

    this.filteredSections$ = this.inputControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
    this.filteredSections$.pipe(skip(1)).subscribe((filteredSections) => {
      this.filteredSections = filteredSections;
      this.detectChanges();
    });

    if (this.autoScroll) {
      setTimeout(() => {
        let element = document.getElementById('chat-console-messages');
        if (element) {
          element.scrollTop = element.scrollHeight - element.clientHeight;
          this.cdr.markForCheck();
        }
      }, 500);
    }
    this.cdr.markForCheck();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.onLastActionRendered.emit(true);
    }, 0);
  }

  sendSelectedValue(selectedChoice: Choice): void {
    this.selectedChoice = selectedChoice.title;

    let target = this.action.action;
    target['sessionValues'] = selectedChoice.sessionValues;

    this.onSendReply.emit({
      action: target,
      title: selectedChoice.title,
      type: this.action.type
    });
    this.cdr.markForCheck();
  }

  private _filter(inputValue: string): Section[] {
    let filteredSections = [];
    if (this.action.sections && inputValue != '') {
      filteredSections = JSON.parse(JSON.stringify(this.action.sections));
      filteredSections.forEach((section) => {
        section.choices = section.choices.filter((choice) =>
          choice.title
            .toUpperCase()
            .trim()
            .includes(inputValue.toUpperCase().trim())
        );
      });
      return filteredSections.filter((section) => section.choices.length > 0);
    } else {
      return filteredSections;
    }
  }

  detectChanges() {
    this.cdr.markForCheck();
    this.app.tick();
  }
}

import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Choice, List, Section } from './list.model';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'list-action',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  @Input() action: List;
  @Input() inverted = false;
  @Input() primaryColor = '#30B286';
  @Input() textColor = '#FFFFFF';
  @Input() userBubbleColor = '#C5DBEA';
  @Input() userTextColor = '#2C3F59';
  @Input() autoScroll? = true;

  @Output() onSendReply = new EventEmitter<any>();
  @Output() onLoadNextAction = new EventEmitter<boolean>();

  filteredSections$: Observable<Section[]> = new Observable<[]>();
  selectedChoice: string;
  inputControl = new FormControl('');

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log('test init list');
    this.onLoadNextAction.emit(true);

    this.filteredSections$ = this.inputControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
    this.cdr.markForCheck();
  }

  sendSelectedValue(selectedChoice: Choice): void {
    this.selectedChoice = selectedChoice.title;

    const target = this.action.action;
    target['sessionValues'] = selectedChoice.sessionValues;

    this.onSendReply.emit({
      action: target,
      title: selectedChoice.title,
      type: this.action.type
    });
    this.cdr.markForCheck();
  }

  private _filter(inputValue: string): Section[] {
    var filteredSections = [];
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
}

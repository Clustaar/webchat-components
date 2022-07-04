import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { List, Section } from './list.model';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'list-action',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() list: List;
  @Input() inverted: boolean = false;
  @Input() userBubbleColor: string = '#C5DBEA';
  @Input() userTextColor: string = '#2C3F59';
  @Output() onSuggestionClick = new EventEmitter<string>();
  @Output() onLoadNextAction = new EventEmitter<boolean>();
  filteredSections: Section[] = [];

  ngOnInit(): void {
    this.onLoadNextAction.emit(true);
  }

  filter(inputValue: string): void {
    if (this.list.sections && inputValue != '') {
      this.filteredSections = cloneDeep(this.list.sections);
      this.filteredSections.forEach((section) => {
        section.choices = section.choices.filter((choice) =>
          choice.title
            .toUpperCase()
            .trim()
            .includes(inputValue.toUpperCase().trim())
        );
      });
    } else {
      this.filteredSections = [];
    }
  }

  sendSelectedValue(choiceTitle: string): void {
    this.onSuggestionClick.emit(choiceTitle);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { List, Section } from './list.model';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'list-action',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() list: List;
  @Input() inverted: boolean = false;
  @Input() userBubbleColor: string = '#C5DBEA';
  @Input() userTextColor: string = '#2C3F59';
  @Output() onSuggestionClick = new EventEmitter<string>();
  filteredSections: Section[] = [];

  filter(inputValue: string): void {
    if (this.list.sections && inputValue != '') {
      this.filteredSections = cloneDeep(this.list.sections);
      this.filteredSections.forEach(section => {
        section.choices = section.choices.filter((choice) => choice.title.toUpperCase().trim().includes(inputValue.toUpperCase().trim()));
      });
    }
  }

  sendSelectedValue(): void {
    this.onSuggestionClick.emit('value');
  }
}

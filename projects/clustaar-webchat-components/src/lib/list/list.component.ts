import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Choice, List, Section, Target } from './list.model';

@Component({
  selector: 'list-action',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() action: { type: string; list: List};
  @Input() inverted = false;
  @Input() userBubbleColor = '#C5DBEA';
  @Input() userTextColor = '#2C3F59';
  @Output() onChoiceSelected = new EventEmitter<{selectedChoice: Choice, target: Target}>();
  @Output() onLoadNextAction = new EventEmitter<boolean>();
  filteredSections: Section[] = [];

  ngOnInit(): void {
    this.onLoadNextAction.emit(true);
  }

  filter(inputValue: string): void {
    if (this.action.list.sections && inputValue != '') {
      this.filteredSections = JSON.parse(JSON.stringify(this.action.list.sections));
      this.filteredSections.forEach((section) => {
        section.choices = section.choices.filter((choice) =>
          choice.title
            .toUpperCase()
            .trim()
            .includes(inputValue.toUpperCase().trim())
        );
      });
      this.filteredSections = this.filteredSections.filter((section) => section.choices.length > 0);
    } else {
      this.filteredSections = [];
    }
  }

  sendSelectedValue(selectedChoice: Choice): void {
    const target = this.action.list.defaultTarget;
    this.onChoiceSelected.emit({ selectedChoice, target });
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Choice, List, Section, Target } from './list.model';

@Component({
  selector: 'list-action',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() action: List;
  @Input() inverted = false;
  @Input() userBubbleColor = '#C5DBEA';
  @Input() userTextColor = '#2C3F59';

  @Output() onSendReply = new EventEmitter<any>();
  @Output() onLoadNextAction = new EventEmitter<boolean>();

  filteredSections: Section[] = [];
  selectedChoice: string;

  ngOnInit(): void {
    this.onLoadNextAction.emit(true);
  }

  filter(inputValue: string): void {
    if (this.action.sections && inputValue != '') {
      this.filteredSections = JSON.parse(JSON.stringify(this.action.sections));
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
    this.selectedChoice = selectedChoice.title;

    const target = this.action.action;
    target['sessionValues'] = selectedChoice.sessionValues;

    this.onSendReply.emit({
      action: target,
      title: selectedChoice.title,
      type: this.action.type
    });
  }
}

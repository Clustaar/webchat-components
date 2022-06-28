import { Component, Input, OnInit } from '@angular/core';
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
  filteredSections: Section[];

  ngOnInit(): void {
    this.filteredSections = cloneDeep(this.list.sections);
  }

  filter(inputValue: string): void {
    if (this.list.sections) {
      this.filteredSections = cloneDeep(this.list.sections);
      this.filteredSections.forEach(section => {
        section.choices = section.choices.filter((choice) => choice.name.toUpperCase().trim().includes(inputValue.toUpperCase().trim()));
      });
    }
  }
}

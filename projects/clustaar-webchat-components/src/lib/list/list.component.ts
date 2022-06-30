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
  stateCtrl = new FormControl('');
  filteredStates: Observable<State[]>;

  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];

  constructor() {
    /*this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.states.slice())),
    );*/
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
    }
  }

  sendSelectedValue(): void {
    this.onSuggestionClick.emit('value');
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter((state) =>
      state.name.toLowerCase().includes(filterValue)
    );
  }
}

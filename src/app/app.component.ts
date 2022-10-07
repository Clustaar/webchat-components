import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DISPLAYED_ACTIONS } from './actions';

@Component({
  selector: 'wc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  displayedActions = DISPLAYED_ACTIONS;
  primaryColor = '#660066';
  textColor = 'rgb(161, 161, 243)';
  userBubbleColor = '#30B286';
  userTextColor = '#FFFFFF';

  constructor() {}
}

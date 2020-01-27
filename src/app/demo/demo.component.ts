import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DISPLAYED_ACTIONS } from './actions';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoComponent {
  displayedActions = DISPLAYED_ACTIONS;
  primaryColor = '#660066';
  textColor = 'rgb(161, 161, 243)';
  userBubbleColor = '#30B286';
  userTextColor = '#FFFFFF';
}

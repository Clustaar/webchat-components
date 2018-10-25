import { Component } from '@angular/core';
import { DISPLAYED_ACTIONS } from './actions';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  displayedActions = DISPLAYED_ACTIONS
  primaryColor = "#660066";
}

import { ApplicationRef, ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'wc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(app: ApplicationRef) {
    app.tick();
  }

}

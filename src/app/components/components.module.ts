import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import {
  SwitchConsoleActionsComponent,
  ImageConsoleActionComponent,
  WaitConsoleActionComponent,
  TextConsoleActionComponent,
  UserMessageConsoleActionComponent,
  QuickreplyConsoleActionComponent,
  CardConsoleActionComponent,
  LocationConsoleActionComponent,
} from './';

const PAGES_DIRECTIVES = [
  SwitchConsoleActionsComponent,
  ImageConsoleActionComponent,
  WaitConsoleActionComponent,
  TextConsoleActionComponent,
  UserMessageConsoleActionComponent,
  QuickreplyConsoleActionComponent,
  CardConsoleActionComponent,
  LocationConsoleActionComponent,
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ...PAGES_DIRECTIVES
  ],
  providers: [ 

  ],
  exports: [
     ...PAGES_DIRECTIVES
  ]

})
export class WebchatComponentsModule {
}

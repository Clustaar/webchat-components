import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
    CommonModule
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

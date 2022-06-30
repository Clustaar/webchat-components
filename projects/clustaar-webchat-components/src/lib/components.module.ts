import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperModule } from 'ngx-swiper-wrapper';

import { SwitchConsoleActionsComponent } from './switch/switch';
import { ImageConsoleActionComponent } from './image/image';
import { WaitConsoleActionComponent } from './wait/wait.component';
import { TextConsoleActionComponent } from './text/text';
import { UserMessageConsoleActionComponent } from './user-message/user-message';
import { QuickreplyConsoleActionComponent } from './quickreply/quickreply.component';
import { CardConsoleActionComponent } from './card/card.component';
import { LocationConsoleActionComponent } from './location/location';
import { SendJsEventComponent } from './send-js-event/send-js-event.component';
import { AgentReplyComponent } from './agent-reply/agent-reply.component';
import { TitleComponent } from './title/title.component';
import { SimpleCardConsoleActionComponent } from './simple-card/simple-card';
import { ObfuscationModule } from './obfuscation/obfuscation.module';
import { ListComponent } from './list/list.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

const components = [
  SwitchConsoleActionsComponent,
  ImageConsoleActionComponent,
  WaitConsoleActionComponent,
  TextConsoleActionComponent,
  UserMessageConsoleActionComponent,
  QuickreplyConsoleActionComponent,
  CardConsoleActionComponent,
  SimpleCardConsoleActionComponent,
  LocationConsoleActionComponent,
  SendJsEventComponent,
  AgentReplyComponent,
  TitleComponent,
  ListComponent
];

@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
    ObfuscationModule,
    MatAutocompleteModule
  ],
  declarations: components,
  exports: components
})
export class WebchatComponentsModule {}

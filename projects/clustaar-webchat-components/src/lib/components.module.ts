import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
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
import { SpellzReplyComponent } from './spellz-reply/spellz-reply.component';
import { SpellzSeparatorComponent } from './spellz-separator/spellz-separator';

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
  SpellzReplyComponent,
  TitleComponent,
  ListComponent,
  SpellzSeparatorComponent
];

@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
    ObfuscationModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: components,
  exports: components
})
export class WebchatComponentsModule {}

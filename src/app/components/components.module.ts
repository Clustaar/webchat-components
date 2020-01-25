import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 1,
  grabCursor: true
};

import { SwitchConsoleActionsComponent } from './switch/switch';
import { ImageConsoleActionComponent } from './image/image';
import { WaitConsoleActionComponent } from './wait/wait';
import { TextConsoleActionComponent } from './text/text';
import { UserMessageConsoleActionComponent } from './user-message/user-message';
import { QuickreplyConsoleActionComponent } from './quickreply/quickreply';
import { CardConsoleActionComponent } from './card/card';
import { LocationConsoleActionComponent } from './location/location';
import { SendJsEventComponent } from './send-js-event/send-js-event.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgentReplyComponent } from './agent-reply/agent-reply.component';
import { TitleComponent } from './title/title.component';
import { SimpleCardConsoleActionComponent } from './simple-card/simple-card';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SwiperModule,
    FlexLayoutModule
  ],
  declarations: [
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
    TitleComponent
  ],
  exports: [
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
    TitleComponent
  ]
})
export class WebchatComponentsModule {
}

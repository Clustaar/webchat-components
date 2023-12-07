import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from "@angular/material/legacy-autocomplete";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatLegacyInputModule as MatInputModule } from "@angular/material/legacy-input";
import { MatLegacyFormFieldModule as MatFormFieldModule } from "@angular/material/legacy-form-field";

import { SwitchConsoleActionsComponent } from "./switch/switch";
import { ImageConsoleActionComponent } from "./image/image";
import { WaitConsoleActionComponent } from "./wait/wait.component";
import { TextConsoleActionComponent } from "./text/text";
import { UserMessageConsoleActionComponent } from "./user-message/user-message";
import { QuickreplyConsoleActionComponent } from "./quickreply/quickreply.component";
import { CardConsoleActionComponent } from "./card/card.component";
import { LocationConsoleActionComponent } from "./location/location";
import { SendJsEventComponent } from "./send-js-event/send-js-event.component";
import { AgentReplyComponent } from "./agent-reply/agent-reply.component";
import { TitleComponent } from "./title/title.component";
import { SimpleCardConsoleActionComponent } from "./simple-card/simple-card";
import { ObfuscationModule } from "./obfuscation/obfuscation.module";
import { ListComponent } from "./list/list.component";

import { register } from "swiper/element/bundle";
import { SwiperDirective } from "./directives/swiper-directive";
register();

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
  ListComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ObfuscationModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperDirective,
  ],
  declarations: components,
  exports: components,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WebchatComponentsModule {}

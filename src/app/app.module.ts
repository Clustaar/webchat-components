import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './app.routing';

import { DemoComponent } from './demo/demo.component';
import { AppComponent } from './app.component';
import { WebchatComponentsModule } from '../../projects/clustaar-webchat-components/src/lib/components.module';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    WebchatComponentsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

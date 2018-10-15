import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './demo.routing';



import { DemoComponent } from './demo.component';
import { WebchatComponentsModule } from './../components/components.module';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    WebchatComponentsModule,
    routing
  ],
  providers: [],
})
export class DemoModule { }

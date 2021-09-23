import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObfuscationPipe } from './obfuscation.pipe';


@NgModule({
  declarations: [ObfuscationPipe],
  exports: [ObfuscationPipe],
  imports: [
    CommonModule
  ]
})
export class ObfuscationModule {
}

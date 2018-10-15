import { Routes, RouterModule } from '@angular/router';

import { DemoComponent } from './demo.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

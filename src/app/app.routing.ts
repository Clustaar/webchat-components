import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

export const routes: Routes = [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  { path: '**', redirectTo: 'demo' },
  {
    path: 'demo',
    component: DemoComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' });

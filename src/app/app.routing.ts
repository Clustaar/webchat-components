import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

export const routes: Routes = [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  { path: '**', redirectTo: 'demo' },
  
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' });

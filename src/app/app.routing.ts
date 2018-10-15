import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  { path: '**', redirectTo: 'demo' },
  {
    path: 'demo',
    loadChildren: 'app/demo/demo.module#DemoModule'
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });

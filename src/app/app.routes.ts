import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'settings', pathMatch: 'full' },
  { path: 'settings', loadChildren: () => import('./settings/settings-module').then(m => m.SettingsModule) }
];

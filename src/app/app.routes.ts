import { Routes } from '@angular/router';

import { AdminGuard } from './shared/guard/admin.guard';
import { fullRoutes } from './shared/routes/full-routes';
import { content } from './shared/routes/routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/default',
    pathMatch: 'full',
  },
  {
    path: 'auth/login',
    loadComponent: () => import('./auth/login/login').then(m => m.Login),
  },
  {
    path: '',
    loadComponent: () => import('./shared/component/layout/content/content').then(m => m.Content),
    canActivate: [AdminGuard],
    children: content,
  },
  {
    path: '',
    loadComponent: () => import('./shared/component/layout/full/full').then(m => m.Full),
    canActivate: [AdminGuard],
    children: fullRoutes,
  },
  {
    path: '**',
    redirectTo: '/error-page/error404',
  },
];

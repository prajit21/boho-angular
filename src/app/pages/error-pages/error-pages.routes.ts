import { Routes } from '@angular/router';

import { Error400 } from './error400/error400';
import { Error401 } from './error401/error401';
import { Error403 } from './error403/error403';
import { Error404 } from './error404/error404';
import { Error500 } from './error500/error500';
import { Error503 } from './error503/error503';

export default [
  {
    path: 'error400',
    component: Error400,
  },
  {
    path: 'error401',
    component: Error401,
  },
  {
    path: 'error403',
    component: Error403,
  },
  {
    path: 'error404',
    component: Error404,
  },
  {
    path: 'error500',
    component: Error500,
  },
  {
    path: 'error503',
    component: Error503,
  },
] as Routes;

import { Routes } from '@angular/router';

import { Tasks } from './tasks';

export default [
  {
    path: '',
    component: Tasks,
    data: {
      title: 'Tasks',
      breadcrumb: 'Tasks',
    },
  },
] as Routes;

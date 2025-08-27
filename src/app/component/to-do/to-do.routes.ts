import { Routes } from '@angular/router';

import { ToDo } from './to-do';

export default [
  {
    path: '',
    component: ToDo,
    data: {
      title: 'To-Do',
      breadcrumb: 'To-Do',
    },
  },
] as Routes;

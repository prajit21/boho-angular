import { Routes } from '@angular/router';

import { Calender } from './calander';

export default [
  {
    path: '',
    component: Calender,
    data: {
      title: 'Calender',
      breadcrumb: 'Calender',
    },
  },
] as Routes;

import { Routes } from '@angular/router';

import { Calendar } from './calander';

export default [
  {
    path: '',
    component: Calendar,
    data: {
      title: 'Calender',
      breadcrumb: 'Calender',
    },
  },
] as Routes;

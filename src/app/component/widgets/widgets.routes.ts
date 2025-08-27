import { Routes } from '@angular/router';

import { Chart } from './chart/chart';
import { General } from './general/general';

export default [
  {
    path: 'general',
    component: General,
    data: {
      title: 'General',
      breadcrumb: 'General',
    },
  },
  {
    path: 'charts',
    component: Chart,
    data: {
      title: 'Chart',
      breadcrumb: 'Chart',
    },
  },
] as Routes;

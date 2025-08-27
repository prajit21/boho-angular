import { Routes } from '@angular/router';

import { Faq } from './faq';

export default [
  {
    path: '',
    component: Faq,
    data: {
      title: 'FAQ',
      breadcrumb: 'FAQ',
    },
  },
] as Routes;

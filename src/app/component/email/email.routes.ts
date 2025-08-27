import { Routes } from '@angular/router';

import { EmailApp } from './email-app/email-app';
import { EmailCompose } from './email-compose/email-compose';

export default [
  {
    path: 'email-app',
    component: EmailApp,
    data: {
      title: 'Email Application',
      breadcrumb: 'Email Application',
    },
  },
  {
    path: 'email-compose',
    component: EmailCompose,
    data: {
      title: 'Email Compose',
      breadcrumb: 'Email Compose',
    },
  },
] as Routes;

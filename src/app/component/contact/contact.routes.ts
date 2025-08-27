import { Routes } from '@angular/router';

import { Contact } from './contact';

export default [
  {
    path: '',
    component: Contact,
    data: {
      title: 'Contacts',
      breadcrumb: 'Contacts',
    },
  },
] as Routes;

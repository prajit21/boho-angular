import { Routes } from '@angular/router';

import { SupportTicket } from './support-ticket';

export default [
  {
    path: '',
    component: SupportTicket,
    data: {
      title: 'Support Ticket',
      breadcrumb: 'Support Ticket',
    },
  },
] as Routes;

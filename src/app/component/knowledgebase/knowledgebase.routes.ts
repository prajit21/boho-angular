import { Routes } from '@angular/router';

import { Knowledgebase } from './knowledgebase';

export default [
  {
    path: '',
    component: Knowledgebase,
    data: {
      title: 'Knowledgebase',
      breadcrumb: 'Knowledgebase',
    },
  },
] as Routes;

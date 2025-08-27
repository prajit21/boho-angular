import { Routes } from '@angular/router';

import { SearchResult } from './search-result';

export default [
  {
    path: '',
    component: SearchResult,
    data: {
      title: 'Search Website',
      breadcrumb: 'Search Website',
    },
  },
] as Routes;

import { Routes } from '@angular/router';

import { DataTables } from './data-tables';

export default [
  {
    path: '',
    component: DataTables,
    data: {
      title: 'Data Tables',
      breadcrumb: 'Data Tables',
    },
  },
] as Routes;

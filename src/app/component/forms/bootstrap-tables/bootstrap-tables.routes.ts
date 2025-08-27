import { Routes } from '@angular/router';

import { BasicTables } from './basic-tables/basic-tables';
import { TableComponent } from './table-component/table-component';

export default [
  {
    path: 'basic-tables',
    component: BasicTables,
    data: {
      title: 'Bootstrap Basic Tables',
      breadcrumb: 'Bootstrap Basic Tables',
    },
  },
  {
    path: 'table-compoents',
    component: TableComponent,
    data: {
      title: 'Table Components',
      breadcrumb: 'Table Components',
    },
  },
] as Routes;

import { Routes } from '@angular/router';

import { FileManager } from './file-manager';

export default [
  {
    path: '',
    component: FileManager,
    data: {
      title: 'File Manager',
      breadcrumb: 'File Manager',
    },
  },
] as Routes;

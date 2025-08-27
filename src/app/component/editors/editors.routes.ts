import { Routes } from '@angular/router';

import { MdeEditor } from './mde-editor/mde-editor';
import { NgxEditor } from './ngx-editor/ngx-editor';

export default [
  {
    path: 'ngx-editors',
    component: NgxEditor,
    data: {
      title: 'Ngx Editor',
      breadcrumb: 'Ngx Editor',
    },
  },
  {
    path: 'mde-editors',
    component: MdeEditor,
    data: {
      title: 'MDE Editor',
      breadcrumb: 'MDE Editor',
    },
  },
] as Routes;

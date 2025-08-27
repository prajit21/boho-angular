import { Routes } from '@angular/router';

import { MainBookmark } from './main-bookmark';

export default [
  {
    path: '',
    component: MainBookmark,
    data: {
      title: 'Bookmarks',
      breadcrumb: 'Bookmarks',
    },
  },
] as Routes;

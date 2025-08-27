import { Routes } from '@angular/router';

import { SocialMedia } from './social-media';

export default [
  {
    path: '',
    component: SocialMedia,
    data: {
      title: 'Social App',
      breadcrumb: 'Social App',
    },
  },
] as Routes;

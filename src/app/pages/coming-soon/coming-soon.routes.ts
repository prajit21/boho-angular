import { Routes } from '@angular/router';

import { ComingSoonImage } from './coming-soon-image/coming-soon-image';
import { ComingSoonSimple } from './coming-soon-simple/coming-soon-simple';
import { ComingSoonVideo } from './coming-soon-video/coming-soon-video';

export default [
  {
    path: 'coming-simple',
    component: ComingSoonSimple,
  },
  {
    path: 'coming-with-bg-video',
    component: ComingSoonVideo,
  },
  {
    path: 'coming-with-bg-image',
    component: ComingSoonImage,
  },
] as Routes;

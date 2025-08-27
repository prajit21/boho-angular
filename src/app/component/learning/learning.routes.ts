import { Routes } from '@angular/router';

import { DetailedCource } from './detailed-cource/detailed-cource';
import { LearningList } from './learning-list/learning-list';

export default [
  {
    path: 'learning-list',
    component: LearningList,
    data: {
      title: 'Learning List',
      breadcrumb: 'Learning List',
    },
  },
  {
    path: 'detailed-course',
    component: DetailedCource,
    data: {
      title: 'Detailed Course',
      breadcrumb: 'Detailed Course',
    },
  },
] as Routes;

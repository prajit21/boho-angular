import { Routes } from '@angular/router';

import { JobApply } from './job-apply/job-apply';
import { JobDetails } from './job-details/job-details';
import { JobSearchCardview } from './job-search-cardview/job-search-cardview';
import { JobSearchListview } from './job-search-listview/job-search-listview';

export default [
  {
    path: 'cards-view',
    component: JobSearchCardview,
    data: {
      title: 'Cards View',
      breadcrumb: 'Cards View',
    },
  },
  {
    path: 'list-view',
    component: JobSearchListview,
    data: {
      title: 'List View',
      breadcrumb: 'List View',
    },
  },
  {
    path: 'job-details',
    component: JobDetails,
    data: {
      title: 'Job Details',
      breadcrumb: 'Job Details',
    },
  },
  {
    path: 'apply',
    component: JobApply,
    data: {
      title: 'Apply',
      breadcrumb: 'Apply',
    },
  },
] as Routes;

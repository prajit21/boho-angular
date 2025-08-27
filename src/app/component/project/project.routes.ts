import { Routes } from '@angular/router';

import { CreateNewProject } from './create-new-project/create-new-project';
import { ProjectList } from './project-list/project-list';

export default [
  {
    path: 'project-list',
    component: ProjectList,
    data: {
      title: 'Project List',
      breadcrumb: 'project List',
    },
  },
  {
    path: 'create-new',
    component: CreateNewProject,
    data: {
      title: 'Project Create',
      breadcrumb: 'Project Create',
    },
  },
] as Routes;

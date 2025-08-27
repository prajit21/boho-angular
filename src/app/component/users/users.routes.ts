import { Routes } from '@angular/router';

import { UserCard } from './user-card/user-card';
import { UserEdit } from './user-edit/user-edit';
import { UserProfile } from './user-profile/user-profile';

export default [
  {
    path: 'users-profile',
    component: UserProfile,
    data: {
      title: 'User Profile',
      breadcrumb: 'User Profile',
    },
  },
  {
    path: 'users-edit',
    component: UserEdit,
    data: {
      title: 'Edit Profile',
      breadcrumb: 'Edit Profile',
    },
  },
  {
    path: 'users-card',
    component: UserCard,
    data: {
      title: 'User Cards',
      breadcrumb: 'User Cards',
    },
  },
] as Routes;

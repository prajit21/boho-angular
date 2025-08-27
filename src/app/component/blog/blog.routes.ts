import { Routes } from '@angular/router';

import { BlogAddPost } from './blog-add-post/blog-add-post';
import { BlogDetails } from './blog-details/blog-details';
import { BlogSingle } from './blog-single/blog-single';

export default [
  {
    path: 'blog-details',
    component: BlogDetails,
    data: {
      title: 'Blog Details',
      breadcrumb: 'Blog Details',
    },
  },
  {
    path: 'blog-single',
    component: BlogSingle,
    data: {
      title: 'Blog Single',
      breadcrumb: 'Blog Single',
    },
  },
  {
    path: 'add-post',
    component: BlogAddPost,
    data: {
      title: 'Add Post',
      breadcrumb: 'Add Post',
    },
  },
] as Routes;

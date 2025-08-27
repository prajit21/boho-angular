import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: 'dashboard',
    data: {
      title: 'Dashboard',
      breadcrumb: 'Dashboard',
    },
    loadChildren: () => import('../../component/dashboard/dashboard.routes'),
  },
  {
    path: 'widgets',
    data: {
      title: 'Widgets',
      breadcrumb: 'Widgets',
    },
    loadChildren: () => import('../../component/widgets/widgets.routes'),
  },
  {
    path: 'page-layout',
    data: {
      title: 'Page Layout',
      breadcrumb: 'Page Layout',
    },
    loadChildren: () => import('../../component/page-layout/page-layout.routes'),
  },
  {
    path: 'project',
    data: {
      title: 'Project',
      breadcrumb: 'Project',
    },
    loadChildren: () => import('../../component/project/project.routes'),
  },
  {
    path: 'file-manager',
    data: {
      breadcrumb: 'Apps',
    },
    loadChildren: () => import('../../component/file-manager/file-manager.routes'),
  },
  {
    path: 'ecommerce',
    data: {
      title: 'ECommerce',
      breadcrumb: 'ECommerce',
    },
    loadChildren: () => import('../../component/main-ecommerce/main-ecommerce.routes'),
  },
  {
    path: 'email',
    data: {
      title: 'Email',
      breadcrumb: 'Email',
    },
    loadChildren: () => import('../../component/email/email.routes'),
  },
  {
    path: 'chat',
    data: {
      title: 'Chat',
      breadcrumb: 'Chat',
    },
    loadChildren: () => import('../../component/chat/chat.routes'),
  },
  {
    path: 'users',
    data: {
      title: 'Users',
      breadcrumb: 'Users',
    },
    loadChildren: () => import('../../component/users/users.routes'),
  },
  {
    path: 'bookmarks',
    data: {
      breadcrumb: 'Apps',
    },
    loadChildren: () => import('../../component/main-bookmark/main-bookmark.routes'),
  },
  {
    path: 'contacts',
    data: {
      breadcrumb: 'Apps',
    },
    loadChildren: () => import('../../component/contact/contact.routes'),
  },
  {
    path: 'tasks',
    data: {
      breadcrumb: 'Apps',
    },
    loadChildren: () => import('../../component/tasks/tasks.routes'),
  },
  {
    path: 'calender',
    data: {
      breadcrumb: 'Apps',
    },
    loadChildren: () => import('../../component/calander/calander.routes'),
  },
  {
    path: 'social-app',
    data: {
      breadcrumb: 'Apps',
    },
    loadChildren: () => import('../../component/social-media/social-media.routes'),
  },
  {
    path: 'todo',
    data: {
      breadcrumb: 'Apps',
    },
    loadChildren: () => import('../../component/to-do/to-do.routes'),
  },
  {
    path: 'search-result',
    data: {
      breadcrumb: 'Apps',
    },
    loadChildren: () => import('../../component/search-result/search-result.routes'),
  },
  {
    path: 'form-control',
    data: {
      title: 'Form Controls',
      breadcrumb: 'Form Controls',
    },
    loadChildren: () => import('../../component/forms/form-controls/form-controls.routes'),
  },
  {
    path: 'form-widgets',
    data: {
      title: 'Form Widgets',
      breadcrumb: 'Form Widgets',
    },
    loadChildren: () => import('../../component/forms/form-widgets/form-widgets.routes'),
  },
  {
    path: 'bootstrap-tables',
    data: {
      title: 'Bootstrap Tables',
      breadcrumb: 'Bootstrap Tables',
    },
    loadChildren: () => import('../../component/forms/bootstrap-tables/bootstrap-tables.routes'),
  },
  {
    path: 'data-tables',
    loadChildren: () => import('../../component/forms/data-tables/data-tables.routes'),
  },
  {
    path: 'ui-kits',
    data: {
      title: 'Ui Kits',
      breadcrumb: 'Ui Kits',
    },
    loadChildren: () => import('../../component/ui-kits/ui-kits.routes'),
  },
  {
    path: 'bonus-ui',
    data: {
      title: 'Bonus Ui',
      breadcrumb: 'Bonus Ui',
    },
    loadChildren: () => import('../../component/bonus-ui/bonus-ui.routes'),
  },
  {
    path: 'icon',
    data: {
      title: 'Icons',
      breadcrumb: 'Icons',
    },
    loadChildren: () => import('../../component/icons/icons.routes'),
  },
  {
    path: 'button',
    data: {
      title: 'Buttons',
      breadcrumb: 'Buttons',
    },
    loadChildren: () => import('../../component/buttons/buttons.routes'),
  },
  {
    path: 'charts',
    data: {
      title: 'Charts',
      breadcrumb: 'Charts',
    },
    loadChildren: () => import('../../component/charts/charts.routes'),
  },
  {
    path: 'sample-page',
    data: {
      breadcrumb: 'Pages',
    },
    loadChildren: () => import('../../component/sample-page/sample-page.routes'),
  },
  {
    path: 'gallery',
    data: {
      title: 'Gallery',
      breadcrumb: 'Gallery',
    },
    loadChildren: () => import('../../component/gallery/gallery.routes'),
  },
  {
    path: 'blog',
    data: {
      title: 'Blog',
      breadcrumb: 'Blog',
    },
    loadChildren: () => import('../../component/blog/blog.routes'),
  },
  {
    path: 'faq',
    data: {
      breadcrumb: 'FAQ',
    },
    loadChildren: () => import('../../component/faq/faq.routes'),
  },
  {
    path: 'job-search',
    data: {
      title: 'Job Search',
      breadcrumb: 'Job Search',
    },
    loadChildren: () => import('../../component/job-search/job-search.routes'),
  },
  {
    path: 'learning',
    data: {
      title: 'Learning',
      breadcrumb: 'Learning',
    },
    loadChildren: () => import('../../component/learning/learning.routes'),
  },
  {
    path: 'maps',
    data: {
      title: 'Maps',
      breadcrumb: 'Maps',
    },
    loadChildren: () => import('../../component/maps/maps.routes'),
  },
  {
    path: 'editors',
    data: {
      title: 'Editors',
      breadcrumb: 'Editors',
    },
    loadChildren: () => import('../../component/editors/editors.routes'),
  },
  {
    path: 'knowledgebase',
    data: {
      breadcrumb: 'Knowledgebase',
    },
    loadChildren: () => import('../../component/knowledgebase/knowledgebase.routes'),
  },
  {
    path: 'support-ticket',
    data: {
      breadcrumb: 'Apps',
    },
    loadChildren: () => import('../../component/support-ticket/support-ticket.routes'),
  },
];

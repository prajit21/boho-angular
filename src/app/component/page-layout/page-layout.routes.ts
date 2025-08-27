import { Routes } from '@angular/router';

import { FooterDark } from './footer-dark/footer-dark';
import { FooterFixed } from './footer-fixed/footer-fixed';
import { FooterLight } from './footer-light/footer-light';
import { HideNavScroll } from './hide-nav-scroll/hide-nav-scroll';

export default [
  {
    path: 'hide-nav-scroll',
    component: HideNavScroll,
    data: {
      title: 'Hide Menu On Scroll',
      breadcrumb: 'Hide Menu On Scroll',
    },
  },
  {
    path: 'footer-light',
    component: FooterLight,
    data: {
      title: 'Footer Light',
      breadcrumb: 'Footer Light',
    },
  },
  {
    path: 'footer-dark',
    component: FooterDark,
    data: {
      title: 'Footer Dark',
      breadcrumb: 'Footer Dark',
    },
  },
  {
    path: 'footer-fixed',
    component: FooterFixed,
    data: {
      title: 'Footer Fixed',
      breadcrumb: 'Footer Fixed',
    },
  },
] as Routes;

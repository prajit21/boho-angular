import { Routes } from '@angular/router';

import { FeatherIcon } from './feather-icon/feather-icon';
import { FlagIcon } from './flag-icon/flag-icon';
import { FontawesomeIcon } from './fontawesome-icon/fontawesome-icon';
import { IcoIcon } from './ico-icon/ico-icon';
import { ThemifyIcon } from './themify-icon/themify-icon';
import { WeatherIcon } from './weather-icon/weather-icon';

export default [
  {
    path: 'flag-icon',
    component: FlagIcon,
    data: {
      title: 'Flag Icons',
      breadcrumb: 'Flag Icons',
    },
  },
  {
    path: 'fontawesome-icon',
    component: FontawesomeIcon,
    data: {
      title: 'Font Awesome Icon',
      breadcrumb: 'Font Awesome Icon',
    },
  },
  {
    path: 'ico-icon',
    component: IcoIcon,
    data: {
      title: 'ICO Icon',
      breadcrumb: 'ICO Icon',
    },
  },
  {
    path: 'thimify-icon',
    component: ThemifyIcon,
    data: {
      title: 'Themify Icon',
      breadcrumb: 'Themify Icon',
    },
  },
  {
    path: 'feather-icon',
    component: FeatherIcon,
    data: {
      title: 'Feather Icons',
      breadcrumb: 'Feather Icons',
    },
  },
  {
    path: 'whether-icon',
    component: WeatherIcon,
    data: {
      title: 'Whether Icon',
      breadcrumb: 'Whether Icon',
    },
  },
] as Routes;

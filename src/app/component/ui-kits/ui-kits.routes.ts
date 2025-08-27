import { Routes } from '@angular/router';

import { Accordion } from './accordion/accordion';
import { Alert } from './alert/alert';
import { Avtars } from './avtars/avtars';
import { Dropdown } from './dropdown/dropdown';
import { Grid } from './grid/grid';
import { HelperClasses } from './helper-classes/helper-classes';
import { Lists } from './lists/lists';
import { Popover } from './popover/popover';
import { ProgressBar } from './progress-bar/progress-bar';
import { Tabs } from './tabs/tabs';
import { TagPills } from './tag-pills/tag-pills';
import { Tooltip } from './tooltip/tooltip';
import { Typography } from './typography/typography';
import { UiModal } from './ui-modal/ui-modal';

export default [
  {
    path: 'typography',
    component: Typography,
    data: {
      title: 'Typography',
      breadcrumb: 'Typography',
    },
  },
  {
    path: 'avatars',
    component: Avtars,
    data: {
      title: 'Avatars',
      breadcrumb: 'Avatars',
    },
  },
  {
    path: 'helper-classes',
    component: HelperClasses,
    data: {
      title: 'Helper Classes',
      breadcrumb: 'Helper Classes',
    },
  },
  {
    path: 'grid',
    component: Grid,
    data: {
      title: 'Grid',
      breadcrumb: 'Grid',
    },
  },
  {
    path: 'tag-pills',
    component: TagPills,
    data: {
      title: 'Tag & Pills',
      breadcrumb: 'Tag & Pills',
    },
  },
  {
    path: 'progress',
    component: ProgressBar,
    data: {
      title: 'Progress',
      breadcrumb: 'Progress',
    },
  },
  {
    path: 'modal',
    component: UiModal,
    data: {
      title: 'Modal',
      breadcrumb: 'Modal',
    },
  },
  {
    path: 'alert',
    component: Alert,
    data: {
      title: 'Alert',
      breadcrumb: 'Alert',
    },
  },
  {
    path: 'popover',
    component: Popover,
    data: {
      title: 'Popover',
      breadcrumb: 'Popover',
    },
  },
  {
    path: 'tooltip',
    component: Tooltip,
    data: {
      title: 'Tooltip',
      breadcrumb: 'Tooltip',
    },
  },
  {
    path: 'dropdown',
    component: Dropdown,
    data: {
      title: 'Dropdown',
      breadcrumb: 'Dropdwon',
    },
  },
  {
    path: 'accordion',
    component: Accordion,
    data: {
      title: 'Accordion',
      breadcrumb: 'Accordion',
    },
  },
  {
    path: 'tabs',
    component: Tabs,
    data: {
      title: 'Tabs',
      breadcrumb: 'Tabs',
    },
  },
  {
    path: 'lists',
    component: Lists,
    data: {
      title: 'Lists',
      breadcrumb: 'Lists',
    },
  },
] as Routes;

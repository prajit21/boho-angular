import { Routes } from '@angular/router';

import { ButtonGroup } from './button-group/button-group';
import { DefaultButtons } from './default-buttons/default-buttons';
import { EdgeButtons } from './edge-buttons/edge-buttons';
import { FlatButtons } from './flat-buttons/flat-buttons';
import { RaisedButtons } from './raised-buttons/raised-buttons';

export default [
  {
    path: 'default-style',
    component: DefaultButtons,
    data: {
      title: 'Default Style',
      breadcrumb: 'Default Style',
    },
  },
  {
    path: 'flat-style',
    component: FlatButtons,
    data: {
      title: 'Flat Buttons',
      breadcrumb: 'Flat Buttons',
    },
  },
  {
    path: 'edge-style',
    component: EdgeButtons,
    data: {
      title: 'Edge Buttons',
      breadcrumb: 'Edge Buttons',
    },
  },
  {
    path: 'raised-style',
    component: RaisedButtons,
    data: {
      title: 'Raised Buttons',
      breadcrumb: 'Raised Buttons',
    },
  },
  {
    path: 'button-group',
    component: ButtonGroup,
    data: {
      title: 'Button Group',
      breadcrumb: 'Button Group',
    },
  },
] as Routes;

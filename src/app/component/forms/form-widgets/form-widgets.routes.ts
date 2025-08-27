import { Routes } from '@angular/router';

import { Clipboard } from './clipboard/clipboard';
import { Datepicker } from './datepicker/datepicker';
import { Select2 } from './select2/select2';
import { Switch } from './switch/switch';
import { Touchspin } from './touchspin/touchspin';
import { Typeahead } from './typeahead/typeahead';

export default [
  {
    path: 'datepicker',
    component: Datepicker,
    data: {
      title: 'Datepicker',
      breadcrumb: 'Datepicker',
    },
  },
  {
    path: 'touchspin',
    component: Touchspin,
    data: {
      title: 'Touchspin',
      breadcrumb: 'Touchspin',
    },
  },
  {
    path: 'select2',
    component: Select2,
    data: {
      title: 'Select2',
      breadcrumb: 'Select2',
    },
  },
  {
    path: 'switch',
    component: Switch,
    data: {
      title: 'Switch',
      breadcrumb: 'Switch',
    },
  },
  {
    path: 'typeahead',
    component: Typeahead,
    data: {
      title: 'Typeahead',
      breadcrumb: 'Typeahead',
    },
  },
  {
    path: 'clipboard',
    component: Clipboard,
    data: {
      title: 'Clipboard',
      breadcrumb: 'Clipboard',
    },
  },
] as Routes;

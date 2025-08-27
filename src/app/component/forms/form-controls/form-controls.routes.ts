import { Routes } from '@angular/router';

import { BaseInput } from './base-input/base-input';
import { CheckboxRadio } from './checkbox-radio/checkbox-radio';
import { InputGroup } from './input-group/input-group';
import { MegaOption } from './mega-option/mega-option';
import { Validation } from './validation/validation';

export default [
  {
    path: 'form-validation',
    component: Validation,
    data: {
      title: 'Validation Forms',
      breadcrumb: 'Validation Forms',
    },
  },
  {
    path: 'base-input',
    component: BaseInput,
    data: {
      title: 'Base Inputs',
      breadcrumb: 'Base Inputs',
    },
  },
  {
    path: 'checkbox-radio',
    component: CheckboxRadio,
    data: {
      title: 'Checkbox & Radio',
      breadcrumb: 'Checkbox & Radio',
    },
  },
  {
    path: 'input-groups',
    component: InputGroup,
    data: {
      title: 'Input Groups',
      breadcrumb: 'Input Groups',
    },
  },
  {
    path: 'mega-options',
    component: MegaOption,
    data: {
      title: 'Mega Options',
      breadcrumb: 'Mega Options',
    },
  },
] as Routes;

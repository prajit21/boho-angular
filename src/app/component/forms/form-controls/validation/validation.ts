import { Component } from '@angular/core';

import { BrowserDefault } from './browser-default/browser-default';
import { TooltipForm } from './tooltip-form/tooltip-form';
import { ValiditionForm } from './validition-form/validition-form';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.html',
  styleUrls: ['./validation.scss'],
  imports: [TooltipForm, BrowserDefault, ValiditionForm],
})
export class Validation {}

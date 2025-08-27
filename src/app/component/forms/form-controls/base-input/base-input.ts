import { Component } from '@angular/core';

import { BasicFloatingInput } from './basic-floating-input/basic-floating-input';
import { BasicForm } from './basic-form/basic-form';
import { BasicHtmlInput } from './basic-html-input/basic-html-input';
import { EdgeInput } from './edge-input/edge-input';
import { FileInput } from './file-input/file-input';
import { FlatInputStyle } from './flat-input-style/flat-input-style';
import { Floatim } from './floating-form/floating-form';
import { FormControlSizing } from './form-control-sizing/form-control-sizing';
import { RaiseInput } from './raise-input/raise-input';
import { SelectSizing } from './select-sizing/select-sizing';

@Component({
  selector: 'app-base-input',
  templateUrl: './base-input.html',
  styleUrls: ['./base-input.scss'],
  imports: [
    BasicForm,
    Floatim,
    SelectSizing,
    FormControlSizing,
    FileInput,
    FlatInputStyle,
    BasicHtmlInput,
    BasicFloatingInput,
    EdgeInput,
    RaiseInput,
  ],
})
export class BaseInput {}

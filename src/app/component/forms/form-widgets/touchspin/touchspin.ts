import { Component } from '@angular/core';

import { ButtonWithPrefix } from './button-with-prefix/button-with-prefix';
import { CommonTouchspin } from './common-touchspin/common-touchspin';
import { IconWithPrefix } from './icon-with-prefix/icon-with-prefix';
import { RoundedTouchspin } from './rounded-touchspin/rounded-touchspin';

@Component({
  selector: 'app-touchspin',
  templateUrl: './touchspin.html',
  styleUrls: ['./touchspin.scss'],
  imports: [CommonTouchspin, IconWithPrefix, ButtonWithPrefix, RoundedTouchspin],
})
export class Touchspin {}

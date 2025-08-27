import { Component } from '@angular/core';

import { CheckboxButtonGroup } from './checkbox-button-group/checkbox-button-group';
import { CommonDefaultButtonGroup } from './common-default-button-group/common-default-button-group';
import { CommonLargeButtonGroup } from './common-large-button-group/common-large-button-group';
import { CommonOutlineButtonGroup } from './common-outline-button-group/common-outline-button-group';
import { CommonOutlineCustomButtonGroup } from './common-outline-custom-button-group/common-outline-custom-button-group';
import { NestingButtonGroup } from './nesting-button-group/nesting-button-group';
import { RadioButtonGroup } from './radio-button-group/radio-button-group';
import { VerticalButtonGroup } from './vertical-button-group/vertical-button-group';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.html',
  styleUrls: ['./button-group.scss'],
  imports: [
    CommonDefaultButtonGroup,
    CommonLargeButtonGroup,
    CommonOutlineCustomButtonGroup,
    CommonOutlineButtonGroup,
    RadioButtonGroup,
    CheckboxButtonGroup,
    NestingButtonGroup,
    VerticalButtonGroup,
  ],
})
export class ButtonGroup {}

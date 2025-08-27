import { Component } from '@angular/core';

import { AnimatedButtons } from './animated-buttons/animated-buttons';
import { BasicRadioCheckbox } from './basic-radio-checkbox/basic-radio-checkbox';
import { CustomRadio } from './custom-radio/custom-radio';
import { CustomeCheckbox } from './custome-checkbox/custome-checkbox';
import { DefaultCheckbox } from './default-checkbox/default-checkbox';
import { DefaultRadio } from './default-radio/default-radio';
import { DefaultSwitch } from './default-switch/default-switch';
import { ImagesCheckbox } from './images-checkbox/images-checkbox';
import { ImagesRadio } from './images-radio/images-radio';
import { InlineInputType } from './inline-input-type/inline-input-type';
import { OutlinedCheckbox } from './outlined-checkbox/outlined-checkbox';
import { RadioToggleButton } from './radio-toggle-button/radio-toggle-button';

@Component({
  selector: 'app-checkbox-radio',
  templateUrl: './checkbox-radio.html',
  styleUrls: ['./checkbox-radio.scss'],
  imports: [
    DefaultCheckbox,
    CustomeCheckbox,
    DefaultRadio,
    ImagesCheckbox,
    ImagesRadio,
    CustomRadio,
    DefaultSwitch,
    InlineInputType,
    AnimatedButtons,
    BasicRadioCheckbox,
    RadioToggleButton,
    OutlinedCheckbox,
  ],
})
export class CheckboxRadio {}

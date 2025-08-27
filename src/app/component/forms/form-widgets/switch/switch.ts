import { Component } from '@angular/core';

import { CommonSwitchButton } from './common-switch-button/common-switch-button';
import { CustomSwitch } from './custom-switch/custom-switch';
import { DisableOutline } from './disable-outline/disable-outline';
import { SwitchSizing } from './switch-sizing/switch-sizing';
import { SwitchWithIcon } from './switch-with-icon/switch-with-icon';
import { VariationOfSwitches } from './variation-of-switches/variation-of-switches';
import * as Data from '../../../../shared/data/data/forms/form-widgets';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.html',
  styleUrls: ['./switch.scss'],
  imports: [
    CustomSwitch,
    CommonSwitchButton,
    DisableOutline,
    VariationOfSwitches,
    SwitchSizing,
    SwitchWithIcon,
  ],
})
export class Switch {
  public IconSwitchButton = Data.iconSwitchButton;
  public uncheckedSwitchButton = Data.uncheckedSwitch;
  public borderedIconButton = Data.borderWithIcon;
}

import { Component } from '@angular/core';

import * as Data from '../../../../../shared/data/data/forms/form-widgets';

@Component({
  selector: 'app-custom-switch',
  templateUrl: './custom-switch.html',
  styleUrls: ['./custom-switch.scss'],
  imports: [],
})
export class CustomSwitch {
  public defaultSwitchData = Data.defaultSwitch;
}

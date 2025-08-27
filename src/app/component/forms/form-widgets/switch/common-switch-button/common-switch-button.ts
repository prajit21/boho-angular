import { Component, input } from '@angular/core';

import { commonSwitch } from '../../../../../shared/data/data/forms/form-widgets';

@Component({
  selector: 'app-common-switch-button',
  templateUrl: './common-switch-button.html',
  styleUrls: ['./common-switch-button.scss'],
  imports: [],
})
export class CommonSwitchButton {
  readonly data = input<commonSwitch>();
}

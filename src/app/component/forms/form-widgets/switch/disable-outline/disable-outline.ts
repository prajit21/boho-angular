import { Component } from '@angular/core';

import * as Data from '../../../../../shared/data/data/forms/form-widgets';

@Component({
  selector: 'app-disable-outline',
  templateUrl: './disable-outline.html',
  styleUrls: ['./disable-outline.scss'],
  imports: [],
})
export class DisableOutline {
  public iconSwitchButton = Data.iconSwitchButton[0].data;
}

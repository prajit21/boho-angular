import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/buttons/buttons';

@Component({
  selector: 'app-common-outline-button-group',
  templateUrl: './common-outline-button-group.html',
  styleUrls: ['./common-outline-button-group.scss'],
  imports: [],
})
export class CommonOutlineButtonGroup {
  public commonOutlinedButtonGroupData = Data.commonOutlinedButtonGroupData;
}

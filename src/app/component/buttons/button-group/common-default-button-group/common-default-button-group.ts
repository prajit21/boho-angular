import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/buttons/buttons';

@Component({
  selector: 'app-common-default-button-group',
  templateUrl: './common-default-button-group.html',
  styleUrls: ['./common-default-button-group.scss'],
  imports: [],
})
export class CommonDefaultButtonGroup {
  public commonDefaultButtonGroupData = Data.commonDefaultButtonGroupData;
}

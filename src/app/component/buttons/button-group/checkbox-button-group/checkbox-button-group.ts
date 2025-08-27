import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/buttons/buttons';

@Component({
  selector: 'app-checkbox-button-group',
  templateUrl: './checkbox-button-group.html',
  styleUrls: ['./checkbox-button-group.scss'],
  imports: [],
})
export class CheckboxButtonGroup {
  public checkBoxData = Data.checkBoxData;
}

import { Component } from '@angular/core';

import * as Data from '../../../../../shared/data/data/forms/bootstrap-table';

@Component({
  selector: 'app-head-option',
  templateUrl: './head-option.html',
  styleUrls: ['./head-option.scss'],
  imports: [],
})
export class HeadOption {
  public headOptionData = Data.headOptionData;
}

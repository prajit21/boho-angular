import { Component } from '@angular/core';

import * as Data from '../../../../../shared/data/data/forms/bootstrap-table';

@Component({
  selector: 'app-custom-hover-striped',
  templateUrl: './custom-hover-striped.html',
  styleUrls: ['./custom-hover-striped.scss'],
  imports: [],
})
export class CustomHoverStriped {
  public customHoverTableData = Data.customHoverStripedData;
}

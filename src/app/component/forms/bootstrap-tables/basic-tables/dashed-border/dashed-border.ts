import { Component } from '@angular/core';

import * as Data from '../../../../../shared/data/data/forms/bootstrap-table';

@Component({
  selector: 'app-dashed-border',
  templateUrl: './dashed-border.html',
  styleUrls: ['./dashed-border.scss'],
  imports: [],
})
export class DashedBorder {
  public dashedBorderData = Data.dashedBorderData;
}

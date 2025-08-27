import { Component } from '@angular/core';

import * as Data from '../../../../../shared/data/data/forms/bootstrap-table';

@Component({
  selector: 'app-table-bottom-border',
  templateUrl: './table-bottom-border.html',
  styleUrls: ['./table-bottom-border.scss'],
  imports: [],
})
export class TableBottomBorder {
  public tableData = Data.commonTableData;
}

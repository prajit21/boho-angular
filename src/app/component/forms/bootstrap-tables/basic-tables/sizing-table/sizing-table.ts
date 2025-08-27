import { Component } from '@angular/core';

import * as Data from '../../../../../shared/data/data/forms/bootstrap-table';

@Component({
  selector: 'app-sizing-table',
  templateUrl: './sizing-table.html',
  styleUrls: ['./sizing-table.scss'],
  imports: [],
})
export class SizingTable {
  public sizingTableData = Data.sizingTableData;
}

import { Component } from '@angular/core';

import * as Data from '../../../../../shared/data/data/forms/bootstrap-table';

@Component({
  selector: 'app-inverse-table',
  templateUrl: './inverse-table.html',
  styleUrls: ['./inverse-table.scss'],
  imports: [],
})
export class InverseTable {
  public inverseTableData = Data.inverseTableData;
}

import { Component } from '@angular/core';

import * as Data from '../../../../../shared/data/data/forms/bootstrap-table';

@Component({
  selector: 'app-inverse-table-primarybg',
  templateUrl: './inverse-table-primarybg.html',
  styleUrls: ['./inverse-table-primarybg.scss'],
  imports: [],
})
export class InverseTablePrimarybg {
  public tableData = Data.commonTableData;
}

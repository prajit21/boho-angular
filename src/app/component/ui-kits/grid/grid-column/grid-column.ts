import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/ui-kits/grid';

@Component({
  selector: 'app-grid-column',
  templateUrl: './grid-column.html',
  styleUrls: ['./grid-column.scss'],
  imports: [],
})
export class GridColumn {
  public gridColumnData = Data.gridColumnData;
}

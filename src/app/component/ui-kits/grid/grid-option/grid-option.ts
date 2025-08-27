import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/ui-kits/grid';

@Component({
  selector: 'app-grid-option',
  templateUrl: './grid-option.html',
  styleUrls: ['./grid-option.scss'],
  imports: [],
})
export class GridOption {
  public gridOptionData = Data.gridOptionData;
  public gridOptionData2 = Data.gridOptionData2;
  public gridOptionData3 = Data.gridOptionData3;
}

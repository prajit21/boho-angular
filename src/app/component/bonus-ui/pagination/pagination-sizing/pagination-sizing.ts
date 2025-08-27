import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/bonus-ui/pagination';

@Component({
  selector: 'app-pagination-sizing',
  templateUrl: './pagination-sizing.html',
  styleUrls: ['./pagination-sizing.scss'],
  imports: [],
})
export class PaginationSizing {
  public paginationSizingData = Data.paginationSizingData;
}

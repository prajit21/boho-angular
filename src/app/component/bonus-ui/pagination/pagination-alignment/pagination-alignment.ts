import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/bonus-ui/pagination';

@Component({
  selector: 'app-pagination-alignment',
  templateUrl: './pagination-alignment.html',
  styleUrls: ['./pagination-alignment.scss'],
  imports: [],
})
export class PaginationAlignment {
  public paginationAlignmentData = Data.paginationAlignmentData;
}

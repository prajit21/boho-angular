import { Component } from '@angular/core';

import * as Data from '../../../shared/data/data/search-result/search-result';

@Component({
  selector: 'app-all',
  templateUrl: './all.html',
  styleUrls: ['./all.scss'],
  imports: [],
})
export class All {
  public allData = Data.allData;
}

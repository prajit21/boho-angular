import { Component } from '@angular/core';

import { flushListData } from '../../../../shared/data/data/ui-kits/lists';

@Component({
  selector: 'app-flush-list',
  templateUrl: './flush-list.html',
  styleUrls: ['./flush-list.scss'],
  imports: [],
})
export class FlushList {
  public flushListData = flushListData;
}

import { Component } from '@angular/core';

import { scrollableListData } from '../../../../shared/data/data/ui-kits/lists';

@Component({
  selector: 'app-scrollable-list',
  templateUrl: './scrollable-list.html',
  styleUrls: ['./scrollable-list.scss'],
  imports: [],
})
export class ScrollableList {
  public scrollableListData = scrollableListData;
}

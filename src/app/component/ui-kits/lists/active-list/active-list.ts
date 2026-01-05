import { Component } from '@angular/core';

import { activeListData } from '../../../../shared/data/data/ui-kits/lists';

@Component({
  selector: 'app-active-list',
  templateUrl: './active-list.html',
  styleUrls: ['./active-list.scss'],
})
export class ActiveList {
  public activeListData = activeListData;
}

import { Component } from '@angular/core';

import { defaultListData } from '../../../../shared/data/data/ui-kits/lists';

@Component({
  selector: 'app-default-list',
  templateUrl: './default-list.html',
  styleUrls: ['./default-list.scss'],
  imports: [],
})
export class DefaultList {
  public defaultListData = defaultListData;
}

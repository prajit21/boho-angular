import { Component } from '@angular/core';

import { horizontialListData } from '../../../../shared/data/data/ui-kits/lists';

@Component({
  selector: 'app-horizontial-list',
  templateUrl: './horizontial-list.html',
  styleUrls: ['./horizontial-list.scss'],
  imports: [],
})
export class HorizontialList {
  public horizontialListData = horizontialListData;
}

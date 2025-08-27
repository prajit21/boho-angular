import { Component } from '@angular/core';

import { customContentData } from '../../../../shared/data/data/ui-kits/lists';

@Component({
  selector: 'app-custom-content-list',
  templateUrl: './custom-content-list.html',
  styleUrls: ['./custom-content-list.scss'],
  imports: [],
})
export class CustomContentList {
  public customContentData = customContentData;
}

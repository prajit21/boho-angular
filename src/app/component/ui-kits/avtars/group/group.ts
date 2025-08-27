import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/ui-kits/avtars';

@Component({
  selector: 'app-group',
  templateUrl: './group.html',
  styleUrls: ['./group.scss'],
  imports: [],
})
export class Group {
  public groupData = Data.groupingData;
}

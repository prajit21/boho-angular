import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { activeListData } from '../../../../shared/data/data/ui-kits/lists';

@Component({
  selector: 'app-active-list',
  templateUrl: './active-list.html',
  styleUrls: ['./active-list.scss'],
  imports: [CommonModule],
})
export class ActiveList {
  public activeListData = activeListData;
}

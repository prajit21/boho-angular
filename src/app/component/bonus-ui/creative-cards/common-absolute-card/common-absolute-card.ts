import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/bonus-ui/creative-cards';

@Component({
  selector: 'app-common-absolute-card',
  templateUrl: './common-absolute-card.html',
  styleUrls: ['./common-absolute-card.scss'],
  imports: [],
})
export class CommonAbsoluteCard {
  public commonAbsoluteCardData = Data.commonAbsoluteCardData;
}

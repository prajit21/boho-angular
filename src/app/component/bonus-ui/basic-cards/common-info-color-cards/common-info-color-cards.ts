import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/bonus-ui/basic-cards';

@Component({
  selector: 'app-common-info-color-cards',
  templateUrl: './common-info-color-cards.html',
  styleUrls: ['./common-info-color-cards.scss'],
  imports: [],
})
export class CommonInfoColorCards {
  public commonInfoColorCardData = Data.commonInfoColorCardData;
}

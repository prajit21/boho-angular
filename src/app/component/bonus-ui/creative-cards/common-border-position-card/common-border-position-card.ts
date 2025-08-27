import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import * as Data from '../../../../shared/data/data/bonus-ui/creative-cards';

@Component({
  selector: 'app-common-border-position-card',
  templateUrl: './common-border-position-card.html',
  styleUrls: ['./common-border-position-card.scss'],
  imports: [FormsModule],
})
export class CommonBorderPositionCard {
  public commonBorderPositionCardData = Data.commonBorderPositionCardData;
}

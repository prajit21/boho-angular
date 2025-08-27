import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/bonus-ui/creative-cards';

@Component({
  selector: 'app-secondary-state',
  templateUrl: './secondary-state.html',
  styleUrls: ['./secondary-state.scss'],
  imports: [],
})
export class SecondaryState {
  public secondaryStateCardData = Data.secondaryStateCardData;
}

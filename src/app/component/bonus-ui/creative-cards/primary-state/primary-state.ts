import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/bonus-ui/creative-cards';

@Component({
  selector: 'app-primary-state',
  templateUrl: './primary-state.html',
  styleUrls: ['./primary-state.scss'],
  imports: [],
})
export class PrimaryState {
  public primaryStateCardData = Data.primaryStateCardData;
}

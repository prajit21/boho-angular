import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/bonus-ui/creative-cards';

@Component({
  selector: 'app-warning-state',
  templateUrl: './warning-state.html',
  styleUrls: ['./warning-state.scss'],
  imports: [],
})
export class WarningState {
  public warningStateCardData = Data.warningStateCardData;
}

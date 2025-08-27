import { Component } from '@angular/core';

import * as Data from '../../../../../shared/data/data/forms/bootstrap-table';

@Component({
  selector: 'app-backpoint',
  templateUrl: './backpoint.html',
  styleUrls: ['./backpoint.scss'],
  imports: [],
})
export class Backpoint {
  public backPointData = Data.backpointData;
}

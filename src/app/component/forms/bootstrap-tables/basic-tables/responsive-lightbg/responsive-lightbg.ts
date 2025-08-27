import { Component } from '@angular/core';

import * as Data from '../../../../../shared/data/data/forms/bootstrap-table';

@Component({
  selector: 'app-responsive-lightbg',
  templateUrl: './responsive-lightbg.html',
  styleUrls: ['./responsive-lightbg.scss'],
  imports: [],
})
export class ResponsiveLightbg {
  public responsiveLightBgData = Data.responsiveLightBgData;
}

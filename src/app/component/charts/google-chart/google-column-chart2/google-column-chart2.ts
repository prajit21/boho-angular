import { Component } from '@angular/core';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { columnChart2 } from '../../../../shared/data/charts/charts/google-chart';

@Component({
  selector: 'app-google-column-chart2',
  templateUrl: './google-column-chart2.html',
  styleUrls: ['./google-column-chart2.scss'],
  imports: [Ng2GoogleChartsModule],
})
export class GoogleColumnChart2 {
  public columnChart2 = columnChart2;
}

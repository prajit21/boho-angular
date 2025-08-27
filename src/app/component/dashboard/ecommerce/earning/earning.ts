import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as Chart from '../../../../shared/data/charts/dashboard-charts';

@Component({
  selector: 'app-earning',
  templateUrl: './earning.html',
  styleUrls: ['./earning.scss'],
  imports: [NgApexchartsModule],
})
export class Earning {
  public earningChart = Chart.EarningChart;
}

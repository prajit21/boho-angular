import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as Chart from '../../../../shared/data/charts/widget-charts';

@Component({
  selector: 'app-monthly-history',
  templateUrl: './monthly-history.html',
  styleUrls: ['./monthly-history.scss'],
  imports: [NgApexchartsModule],
})
export class MonthlyHistory {
  public monthlyhistoryChart = Chart.MonthlyHistoryChart;
}

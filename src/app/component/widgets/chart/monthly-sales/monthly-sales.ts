import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as Chart from '../../../../shared/data/charts/widget-charts';

@Component({
  selector: 'app-monthly-sales',
  templateUrl: './monthly-sales.html',
  styleUrls: ['./monthly-sales.scss'],
  imports: [NgApexchartsModule],
})
export class MonthlySales {
  public monthlysalesChart = Chart.MonthlySaleChart;
}

import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as Chart from '../../../../shared/data/charts/dashboard-charts';

@Component({
  selector: 'app-sales-summary',
  templateUrl: './sales-summary.html',
  styleUrls: ['./sales-summary.scss'],
  imports: [NgApexchartsModule],
})
export class SalesSummary {
  public salesChart = Chart.SalesSummary;
}

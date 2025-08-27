import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as Chart from '../../../../shared/data/charts/dashboard-charts';

@Component({
  selector: 'app-ecommerce-sales-summary',
  templateUrl: './ecommerce-sales-summary.html',
  styleUrls: ['./ecommerce-sales-summary.scss'],
  imports: [NgApexchartsModule],
})
export class EcommerceSalesSummary {
  public salesChart = Chart.EcommerceSalesSummary;
}

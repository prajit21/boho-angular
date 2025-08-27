import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as Chart from '../../../../shared/data/charts/widget-charts';

@Component({
  selector: 'app-live-product',
  templateUrl: './live-product.html',
  styleUrls: ['./live-product.scss'],
  imports: [NgApexchartsModule],
})
export class LiveProduct {
  public liveproductChart = Chart.LiveProductChart;
}

import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as Chart from '../../../../shared/data/charts/widget-charts';

@Component({
  selector: 'app-order-status2',
  templateUrl: './order-status2.html',
  styleUrls: ['./order-status2.scss'],
  imports: [NgApexchartsModule],
})
export class OrderStatus2 {
  public orderstatus2Chart = Chart.OrderStatus2Chart;
}

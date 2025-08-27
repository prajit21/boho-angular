import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as Chart from '../../../../shared/data/charts/widget-charts';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.html',
  styleUrls: ['./order-status.scss'],
  imports: [NgApexchartsModule],
})
export class OrderStatus {
  public packedOrderChart = Chart.OrderPackedChart;
  public dispatchedChart = Chart.OrderDispatchedCHart;
  public reachStationChart = Chart.OrderReachChart;
  public outdeliveryChart = Chart.OrderOutForDeliveryChart;
  public deliveredChart = Chart.OrderDeliveredChart;
}

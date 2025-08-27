import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as Chart from '../../../../shared/data/charts/widget-charts';

@Component({
  selector: 'app-stock-market',
  templateUrl: './stock-market.html',
  styleUrls: ['./stock-market.scss'],
  imports: [NgApexchartsModule],
})
export class StockMarket {
  public stockChart = Chart.StockMarketChart;
}

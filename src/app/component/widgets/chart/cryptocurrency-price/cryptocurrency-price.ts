import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as Chart from '../../../../shared/data/charts/widget-charts';

@Component({
  selector: 'app-cryptocurrency-price',
  templateUrl: './cryptocurrency-price.html',
  styleUrls: ['./cryptocurrency-price.scss'],
  imports: [NgApexchartsModule],
})
export class CryptocurrencyPrice {
  public cryptopriceChart = Chart.CryptoPriceChart;
}

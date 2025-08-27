import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as Chart from '../../../../shared/data/charts/widget-charts';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.html',
  styleUrls: ['./finance.scss'],
  imports: [NgApexchartsModule],
})
export class Finance {
  public financeChart = Chart.FinanceChart;
}

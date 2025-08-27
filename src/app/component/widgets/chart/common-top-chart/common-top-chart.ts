import { Component, input } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { TotalSaleChartOptions } from '../../../../shared/data/charts/widget-charts';

@Component({
  selector: 'app-common-top-chart',
  templateUrl: './common-top-chart.html',
  styleUrls: ['./common-top-chart.scss'],
  imports: [NgApexchartsModule],
})
export class CommonTopChart {
  readonly data = input<TotalSaleChartOptions>();
}

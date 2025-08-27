import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import { biPolarLineChart } from '../../../../shared/data/charts/charts/chartist-chart';

@Component({
  selector: 'app-bi-polar-line-chart',
  templateUrl: './bi-polar-line-chart.html',
  styleUrls: ['./bi-polar-line-chart.scss'],
  imports: [ChartistModule],
})
export class BiPolarLineChart {
  public biPolarLineChart = biPolarLineChart;
}

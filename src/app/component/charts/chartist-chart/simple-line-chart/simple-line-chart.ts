import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import { simpleLineChart } from '../../../../shared/data/charts/charts/chartist-chart';

@Component({
  selector: 'app-simple-line-chart',
  templateUrl: './simple-line-chart.html',
  styleUrls: ['./simple-line-chart.scss'],
  imports: [ChartistModule],
})
export class SimpleLineChart {
  public simpleLineChart = simpleLineChart;
}

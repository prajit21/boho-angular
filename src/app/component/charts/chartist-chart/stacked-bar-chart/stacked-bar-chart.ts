import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import { stackedBarChart } from '../../../../shared/data/charts/charts/chartist-chart';

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.html',
  styleUrls: ['./stacked-bar-chart.scss'],
  imports: [ChartistModule],
})
export class StackedBarChart {
  public stackedBarChart = stackedBarChart;
}

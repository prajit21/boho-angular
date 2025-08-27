import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import { horizontialBarChart } from '../../../../shared/data/charts/charts/chartist-chart';

@Component({
  selector: 'app-horizontial-bar-chart',
  templateUrl: './horizontial-bar-chart.html',
  styleUrls: ['./horizontial-bar-chart.scss'],
  imports: [ChartistModule],
})
export class HorizontialBarChart {
  public horizontialBarChart = horizontialBarChart;
}

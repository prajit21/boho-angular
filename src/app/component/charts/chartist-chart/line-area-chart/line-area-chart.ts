import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import { lineAreaChart } from '../../../../shared/data/charts/charts/chartist-chart';

@Component({
  selector: 'app-line-area-chart',
  templateUrl: './line-area-chart.html',
  styleUrls: ['./line-area-chart.scss'],
  imports: [ChartistModule],
})
export class LineAreaChart {
  public lineAreaChart = lineAreaChart;
}

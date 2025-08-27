import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import { donutSVGChart } from '../../../../shared/data/charts/charts/chartist-chart';

@Component({
  selector: 'app-donut-svg-chart',
  templateUrl: './donut-svg-chart.html',
  styleUrls: ['./donut-svg-chart.scss'],
  imports: [ChartistModule],
})
export class DonutSvgChart {
  public donutSVGChart = donutSVGChart;
}

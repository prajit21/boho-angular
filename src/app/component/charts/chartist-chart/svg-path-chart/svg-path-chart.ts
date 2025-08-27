import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import { svgPathChart } from '../../../../shared/data/charts/charts/chartist-chart';

@Component({
  selector: 'app-svg-path-chart',
  templateUrl: './svg-path-chart.html',
  styleUrls: ['./svg-path-chart.scss'],
  imports: [ChartistModule],
})
export class SvgPathChart {
  public svgPathChart = svgPathChart;
}

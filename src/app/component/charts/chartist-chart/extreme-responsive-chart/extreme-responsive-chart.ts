import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import { extremeResponsiveChart } from '../../../../shared/data/charts/charts/chartist-chart';

@Component({
  selector: 'app-extreme-responsive-chart',
  templateUrl: './extreme-responsive-chart.html',
  styleUrls: ['./extreme-responsive-chart.scss'],
  imports: [ChartistModule],
})
export class ExtremeResponsiveChart {
  public extremeResponsiveChart = extremeResponsiveChart;
}

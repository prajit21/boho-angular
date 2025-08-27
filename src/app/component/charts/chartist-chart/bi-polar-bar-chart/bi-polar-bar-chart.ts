import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import { biPolarBarChart } from '../../../../shared/data/charts/charts/chartist-chart';

@Component({
  selector: 'app-bi-polar-bar-chart',
  templateUrl: './bi-polar-bar-chart.html',
  styleUrls: ['./bi-polar-bar-chart.scss'],
  imports: [ChartistModule],
})
export class BiPolarBarChart {
  public biPolarBarChart = biPolarBarChart;
}

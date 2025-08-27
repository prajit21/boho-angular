import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import { holesDataChart } from '../../../../shared/data/charts/charts/chartist-chart';

@Component({
  selector: 'app-holes-data-chart',
  templateUrl: './holes-data-chart.html',
  styleUrls: ['./holes-data-chart.scss'],
  imports: [ChartistModule],
})
export class HolesDataChart {
  public holesDataChart = holesDataChart;
}

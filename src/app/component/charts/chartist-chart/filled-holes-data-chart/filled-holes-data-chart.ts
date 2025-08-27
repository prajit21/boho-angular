import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import { filledHolesDataChart } from '../../../../shared/data/charts/charts/chartist-chart';

@Component({
  selector: 'app-filled-holes-data-chart',
  templateUrl: './filled-holes-data-chart.html',
  styleUrls: ['./filled-holes-data-chart.scss'],
  imports: [ChartistModule],
})
export class FilledHolesDataChart {
  public filledHolesDataChart = filledHolesDataChart;
}

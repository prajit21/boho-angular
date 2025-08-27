import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { donutChart } from '../../../../shared/data/charts/charts/apex-chart';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.html',
  styleUrls: ['./donut-chart.scss'],
  imports: [NgApexchartsModule],
})
export class DonutChart {
  public donutChart = donutChart;
}

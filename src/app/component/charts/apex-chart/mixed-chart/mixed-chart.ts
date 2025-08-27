import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { mixChart } from '../../../../shared/data/charts/charts/apex-chart';

@Component({
  selector: 'app-mixed-chart',
  templateUrl: './mixed-chart.html',
  styleUrls: ['./mixed-chart.scss'],
  imports: [NgApexchartsModule],
})
export class MixedChart {
  public mixedChart = mixChart;
}

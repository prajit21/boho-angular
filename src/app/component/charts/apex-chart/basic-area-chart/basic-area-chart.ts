import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { basicChart } from '../../../../shared/data/charts/charts/apex-chart';

@Component({
  selector: 'app-basic-area-chart',
  templateUrl: './basic-area-chart.html',
  styleUrls: ['./basic-area-chart.scss'],
  imports: [NgApexchartsModule],
})
export class BasicAreaChart {
  public basicAreaChart = basicChart;
}

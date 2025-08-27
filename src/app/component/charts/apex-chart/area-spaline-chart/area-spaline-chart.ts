import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { areaSpalineChart } from '../../../../shared/data/charts/charts/apex-chart';

@Component({
  selector: 'app-area-spaline-chart',
  templateUrl: './area-spaline-chart.html',
  styleUrls: ['./area-spaline-chart.scss'],
  imports: [NgApexchartsModule],
})
export class AreaSpalineChart {
  public areaSpalineChart = areaSpalineChart;
}

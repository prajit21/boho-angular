import { Component } from '@angular/core';

import { BaseChartDirective } from 'ng2-charts';

import * as chartData from '../../../../shared/data/charts/charts/chartjs-chart';

@Component({
  selector: 'app-chartjs-donutchart',
  templateUrl: './chartjs-donutchart.html',
  styleUrls: ['./chartjs-donutchart.scss'],
  imports: [BaseChartDirective],
})
export class ChartjsDonutchart {
  public doughnutChartLabels = chartData.doughnutChartLabels;
  public doughnutChartData = chartData.doughnutChartData;
  public doughnutChartType = chartData.doughnutChartType;
  public doughnutChartOptions = chartData.doughnutChartOptions;
  public doughnutChartLegend = chartData.doughnutChartLegend;
}

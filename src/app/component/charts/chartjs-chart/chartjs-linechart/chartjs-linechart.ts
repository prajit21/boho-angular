import { Component } from '@angular/core';

import { BaseChartDirective } from 'ng2-charts';

import * as chartData from '../../../../shared/data/charts/charts/chartjs-chart';

@Component({
  selector: 'app-chartjs-linechart',
  templateUrl: './chartjs-linechart.html',
  styleUrls: ['./chartjs-linechart.scss'],
  imports: [BaseChartDirective],
})
export class ChartjsLinechart {
  public lineChartOptions = chartData.lineChartOptions;
  public lineChartLabels = chartData.lineChartLabels;
  public lineChartType = chartData.lineChartType;
  public lineChartLegend = chartData.lineChartLegend;
  public lineChartData = chartData.lineChartData;
}

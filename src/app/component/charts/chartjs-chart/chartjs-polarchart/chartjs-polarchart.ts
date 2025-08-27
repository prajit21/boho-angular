import { Component } from '@angular/core';

import { BaseChartDirective } from 'ng2-charts';

import * as chartData from '../../../../shared/data/charts/charts/chartjs-chart';

@Component({
  selector: 'app-chartjs-polarchart',
  templateUrl: './chartjs-polarchart.html',
  styleUrls: ['./chartjs-polarchart.scss'],
  imports: [BaseChartDirective],
})
export class ChartjsPolarchart {
  public polarChartLabels = chartData.polarChartLabels;
  public polarChartData = chartData.polarChartData;
  public polarChartType = chartData.polarChartType;
  public polarChartOptions = chartData.polarChartOptions;
  public polarChartLegend = chartData.polarChartLegend;
}

import { Component } from '@angular/core';

import { BaseChartDirective } from 'ng2-charts';

import * as chartData from '../../../../shared/data/charts/charts/chartjs-chart';

@Component({
  selector: 'app-chartjs-radargraph',
  templateUrl: './chartjs-radargraph.html',
  styleUrls: ['./chartjs-radargraph.scss'],
  imports: [BaseChartDirective],
})
export class ChartjsRadargraph {
  public radarGraphOptions = chartData.radarGraphOptions;
  public radarGraphLabels = chartData.radarGraphLabels;
  public radarGraphType = chartData.radarGraphType;
  public radarGraphLegend = chartData.radarGraphLegend;
  public radarGraphData = chartData.radarGraphData;
}

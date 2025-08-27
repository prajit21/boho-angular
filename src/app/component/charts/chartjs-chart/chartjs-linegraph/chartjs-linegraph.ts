import { Component } from '@angular/core';

import { BaseChartDirective } from 'ng2-charts';

import * as chartData from '../../../../shared/data/charts/charts/chartjs-chart';

@Component({
  selector: 'app-chartjs-linegraph',
  templateUrl: './chartjs-linegraph.html',
  styleUrls: ['./chartjs-linegraph.scss'],
  imports: [BaseChartDirective],
})
export class ChartjsLinegraph {
  public lineGraphOptions = chartData.lineGraphOptions;
  public lineGraphLabels = chartData.lineGraphLabels;
  public lineGraphType = chartData.lineGraphType;
  public lineGraphLegend = chartData.lineGraphLegend;
  public lineGraphData = chartData.lineGraphData;
}

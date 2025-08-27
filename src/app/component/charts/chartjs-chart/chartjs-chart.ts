import { Component } from '@angular/core';

import { ChartjsBarchart } from './chartjs-barchart/chartjs-barchart';
import { ChartjsDonutchart } from './chartjs-donutchart/chartjs-donutchart';
import { ChartjsLinechart } from './chartjs-linechart/chartjs-linechart';
import { ChartjsLinegraph } from './chartjs-linegraph/chartjs-linegraph';
import { ChartjsPolarchart } from './chartjs-polarchart/chartjs-polarchart';
import { ChartjsRadargraph } from './chartjs-radargraph/chartjs-radargraph';

@Component({
  selector: 'app-chartjs-chart',
  templateUrl: './chartjs-chart.html',
  styleUrls: ['./chartjs-chart.scss'],
  imports: [
    ChartjsBarchart,
    ChartjsLinegraph,
    ChartjsRadargraph,
    ChartjsLinechart,
    ChartjsDonutchart,
    ChartjsPolarchart,
  ],
})
export class ChartjsChart {}

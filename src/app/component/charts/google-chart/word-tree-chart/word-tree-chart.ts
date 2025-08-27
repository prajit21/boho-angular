import { Component } from '@angular/core';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { wordTreeChart } from '../../../../shared/data/charts/charts/google-chart';

@Component({
  selector: 'app-word-tree-chart',
  templateUrl: './word-tree-chart.html',
  styleUrls: ['./word-tree-chart.scss'],
  imports: [],
  imports: [Ng2GoogleChartsModule],
})
export class WordTreeChart {
  public wordTreeChart = wordTreeChart;
}

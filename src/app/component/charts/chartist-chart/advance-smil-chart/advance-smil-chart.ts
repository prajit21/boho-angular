import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import { advanceSMILChart } from '../../../../shared/data/charts/charts/chartist-chart';

@Component({
  selector: 'app-advance-smil-chart',
  templateUrl: './advance-smil-chart.html',
  styleUrls: ['./advance-smil-chart.scss'],
  imports: [ChartistModule],
})
export class AdvanceSmilChart {
  public advanceSMILChart = advanceSMILChart;
}

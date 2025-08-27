import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as Chart from '../../../../shared/data/charts/widget-charts';

@Component({
  selector: 'app-turn-over',
  templateUrl: './turn-over.html',
  styleUrls: ['./turn-over.scss'],
  imports: [NgApexchartsModule],
})
export class TurnOver {
  public turnoverChart = Chart.TurnOverChart;
}

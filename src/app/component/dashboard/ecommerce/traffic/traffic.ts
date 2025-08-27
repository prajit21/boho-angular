import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as Chart from '../../../../shared/data/charts/dashboard-charts';

@Component({
  selector: 'app-traffic',
  templateUrl: './traffic.html',
  styleUrls: ['./traffic.scss'],
  imports: [NgApexchartsModule],
})
export class Traffic {
  public TrafficChart = Chart.TrafficChart;
}

import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as Chart from '../../../../shared/data/charts/widget-charts';

@Component({
  selector: 'app-users',
  templateUrl: './users.html',
  styleUrls: ['./users.scss'],
  imports: [NgApexchartsModule],
})
export class Users {
  public userChart = Chart.UserChart;
}

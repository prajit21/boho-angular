import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as Chart from '../../../../shared/data/charts/dashboard-charts';

@Component({
  selector: 'app-weekly-visitors',
  templateUrl: './weekly-visitors.html',
  styleUrls: ['./weekly-visitors.scss'],
  imports: [NgApexchartsModule],
})
export class WeeklyVisitors {
  public salesChart = Chart.WeeklyVisitor;
}

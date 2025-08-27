import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as Chart from '../../../../shared/data/charts/widget-charts';

@Component({
  selector: 'app-skill-status',
  templateUrl: './skill-status.html',
  styleUrls: ['./skill-status.scss'],
  imports: [NgApexchartsModule],
})
export class SkillStatus {
  public skillstatusChart = Chart.SkillStatusChart;
}

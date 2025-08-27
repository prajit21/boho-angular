import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { columnChart2 } from '../../../../shared/data/charts/charts/apex-chart';

@Component({
  selector: 'app-column-chart2',
  templateUrl: './column-chart2.html',
  styleUrls: ['./column-chart2.scss'],
  imports: [NgApexchartsModule],
})
export class ColumnChart2 {
  public columnChart2 = columnChart2;
}

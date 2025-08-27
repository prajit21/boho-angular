import { Component } from '@angular/core';

import { SvgIconComponent } from 'angular-svg-icon';
import { NgApexchartsModule } from 'ng-apexcharts';

import * as Chart from '../../../../shared/data/charts/widget-general-charts';
import { allDetails } from '../../../../shared/data/data/widgets/widgets-data';

@Component({
  selector: 'app-all-details',
  templateUrl: './all-details.html',
  styleUrls: ['./all-details.scss'],
  imports: [SvgIconComponent, NgApexchartsModule],
})
export class AllDetails {
  public orderChart = Chart.OrderChart;
  public profitChart = Chart.ProfitChart;
  public allDetails = allDetails;
}

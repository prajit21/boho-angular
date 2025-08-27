import { Component, input } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { RadialChartOptions } from '../../../../shared/data/charts/widget-general-charts';

@Component({
  selector: 'app-common-socialmedia',
  templateUrl: './common-socialmedia.html',
  styleUrls: ['./common-socialmedia.scss'],
  imports: [NgApexchartsModule],
})
export class CommonSocialmedia {
  readonly data = input<RadialChartOptions>();
}

import { Component, input } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { RadialChartOptions } from '../../../../shared/data/charts/widget-general-charts';

@Component({
  selector: 'app-common-avarage-ofday',
  templateUrl: './common-avarage-ofday.html',
  styleUrls: ['./common-avarage-ofday.scss'],
  imports: [NgApexchartsModule],
})
export class CommonAvarageOfday {
  readonly data = input<RadialChartOptions>();
}

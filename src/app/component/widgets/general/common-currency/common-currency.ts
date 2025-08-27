import { Component, input } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { FeatherIcons } from '../../../../shared/component/feather-icons/feather-icons';
import { WidgetChartOptions } from '../../../../shared/data/charts/widget-general-charts';

@Component({
  selector: 'app-common-currency',
  templateUrl: './common-currency.html',
  styleUrls: ['./common-currency.scss'],
  imports: [NgApexchartsModule, FeatherIcons],
})
export class CommonCurrency {
  readonly data = input<WidgetChartOptions>();
}

import { Component, input } from '@angular/core';

import { productStatus } from '../../../../shared/data/charts/widget-general-charts';

@Component({
  selector: 'app-common-product-status-chartbox',
  templateUrl: './common-product-status-chartbox.html',
  styleUrls: ['./common-product-status-chartbox.scss'],
  imports: [],
})
export class CommonProductStatusChartbox {
  readonly data = input<productStatus>();
}

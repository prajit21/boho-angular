import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as Chart from '../../../../shared/data/charts/widget-charts';

@Component({
  selector: 'app-crypto-annotation',
  templateUrl: './crypto-annotation.html',
  styleUrls: ['./crypto-annotation.scss'],
  imports: [NgApexchartsModule],
})
export class CryptoAnnotation {
  public cryptoannotationChart = Chart.AnnotationChart;
}

import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as Chart from '../../../../shared/data/charts/widget-general-charts';
import { ClickOutsideDirective } from '../../../../shared/directive/outside.directive';

@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.html',
  styleUrls: ['./visitors.scss'],
  imports: [NgApexchartsModule, ClickOutsideDirective],
})
export class Visitors {
  public visitorsChart = Chart.VisitorsChart;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }
}

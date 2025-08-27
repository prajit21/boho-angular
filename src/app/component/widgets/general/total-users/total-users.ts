import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { FeatherIcons } from '../../../../shared/component/feather-icons/feather-icons';
import * as Chart from '../../../../shared/data/charts/widget-general-charts';
import { totalUserData } from '../../../../shared/data/data/widgets/widgets-data';
import { ClickOutsideDirective } from '../../../../shared/directive/outside.directive';

@Component({
  selector: 'app-total-users',
  templateUrl: './total-users.html',
  styleUrls: ['./total-users.scss'],
  imports: [FeatherIcons, NgApexchartsModule, ClickOutsideDirective],
})
export class TotalUsers {
  public GrowthChart = Chart.GrowthChart;
  public totalUserData = totalUserData;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }
}

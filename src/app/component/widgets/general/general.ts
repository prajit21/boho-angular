import { Component } from '@angular/core';

import { AllDetails } from './all-details/all-details';
import { Balance } from './balance/balance';
import { CommonAvarageOfday } from './common-avarage-ofday/common-avarage-ofday';
import { CommonCurrency } from './common-currency/common-currency';
import { CommonProductStatusChartbox } from './common-product-status-chartbox/common-product-status-chartbox';
import { CommonSocialmedia } from './common-socialmedia/common-socialmedia';
import { Courses } from './courses/courses';
import { TotalUsers } from './total-users/total-users';
import { Visitors } from './visitors/visitors';
import { WidgetCalander } from './widget-calander/widget-calander';
import * as Chart from '../../../shared/data/charts/widget-general-charts';

@Component({
  selector: 'app-general',
  templateUrl: './general.html',
  styleUrls: ['./general.scss'],
  imports: [
    CommonCurrency,
    CommonAvarageOfday,
    CommonProductStatusChartbox,
    Courses,
    TotalUsers,
    Visitors,
    CommonSocialmedia,
    AllDetails,
    Balance,
    WidgetCalander,
  ],
})
export class General {
  // Currency
  public bitcoinChart = Chart.bitcoinChart;
  public ethereumChart = Chart.ethereumChart;
  public leavetravelChart = Chart.leavetravelChart;

  // Avarage Of Days
  public averagesaleChart = Chart.AvarageSalesPerDayChart;
  public averageprofitChart = Chart.AvarageProfitPerDayChart;

  // Product Status Chart Box
  public purchase = Chart.purchase;
  public sale = Chart.sales;
  public salereturn = Chart.salesReturn;
  public purchaserate = Chart.purchaseRate;

  // Social Media
  public facebook = Chart.FacebookChart;
  public twitter = Chart.TwitterChart;
  public instagram = Chart.InstagramChart;
  public youtube = Chart.YoutubeChart;
}

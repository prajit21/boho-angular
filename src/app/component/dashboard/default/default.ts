import { Component } from '@angular/core';

import { BestSellingProduct } from './best-selling-product/best-selling-product';
import { CommonDetails } from './common-details/common-details';
import { CurrentBalance } from './current-balance/current-balance';
import { ProfileGretting } from './profile-gretting/profile-gretting';
import { SalesSummary } from './sales-summary/sales-summary';
import { TrackOrder } from './track-order/track-order';
import { WeeklyVisitors } from './weekly-visitors/weekly-visitors';
import {
  totalOrderData,
  totalProductsData,
  totalUserData,
} from '../../../shared/data/data/default-dashboard/default-dashboard';

@Component({
  selector: 'app-default',
  templateUrl: './default.html',
  styleUrls: ['./default.scss'],
  imports: [
    ProfileGretting,
    CurrentBalance,
    WeeklyVisitors,
    CommonDetails,
    BestSellingProduct,
    SalesSummary,
    TrackOrder,
  ],
})
export class Default {
  public totalOrderData = totalOrderData;
  public totalProductsData = totalProductsData;
  public totalUserData = totalUserData;
}

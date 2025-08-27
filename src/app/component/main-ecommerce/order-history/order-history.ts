import { Component } from '@angular/core';

import { CommonOrdersStatus } from './common-orders-status/common-orders-status';
import * as Data from '../../../shared/data/data/ecommerce/order-history';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.html',
  styleUrls: ['./order-history.scss'],
  imports: [CommonOrdersStatus],
})
export class OrderHistory {
  public newordersData = Data.NewOrders;
  public shippedorderData = Data.ShippedOrders;
  public canclledorderData = Data.CancelledOrders;
  public datatableData = Data.DataTableOrders;
}

import { Component } from '@angular/core';

import { AuditLog } from './audit-log/audit-log';
import { Earning } from './earning/earning';
import { EcommerceSalesSummary } from './ecommerce-sales-summary/ecommerce-sales-summary';
import { ManageOrder } from './manage-order/manage-order';
import { NewsUpdates } from './news-updates/news-updates';
import { OverAllRating } from './over-all-rating/over-all-rating';
import { ScheduleLession } from './schedule-lession/schedule-lession';
import { Traffic } from './traffic/traffic';
import { TransactionHistory } from './transaction-history/transaction-history';
import { UserInformation } from './user-information/user-information';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.html',
  styleUrls: ['./ecommerce.scss'],
  imports: [
    Earning,
    TransactionHistory,
    AuditLog,
    UserInformation,
    EcommerceSalesSummary,
    Traffic,
    NewsUpdates,
    OverAllRating,
    ManageOrder,
    ScheduleLession,
  ],
})
export class Ecommerce {}

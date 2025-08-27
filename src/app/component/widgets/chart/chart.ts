import { Component } from '@angular/core';

import { CommonTopChart } from './common-top-chart/common-top-chart';
import { CryptoAnnotation } from './crypto-annotation/crypto-annotation';
import { CryptocurrencyPrice } from './cryptocurrency-price/cryptocurrency-price';
import { Finance } from './finance/finance';
import { LiveProduct } from './live-product/live-product';
import { MonthlyHistory } from './monthly-history/monthly-history';
import { MonthlySales } from './monthly-sales/monthly-sales';
import { OrderStatus } from './order-status/order-status';
import { OrderStatus2 } from './order-status2/order-status2';
import { SkillStatus } from './skill-status/skill-status';
import { StockMarket } from './stock-market/stock-market';
import { TurnOver } from './turn-over/turn-over';
import { Users } from './users/users';
import * as Charts from '../../../shared/data/charts/widget-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.html',
  styleUrls: ['./chart.scss'],
  imports: [
    CommonTopChart,
    MonthlyHistory,
    SkillStatus,
    OrderStatus,
    LiveProduct,
    TurnOver,
    CryptocurrencyPrice,
    CryptoAnnotation,
    StockMarket,
    Finance,
    OrderStatus2,
    MonthlySales,
    Users,
  ],
})
export class Chart {
  public totalsalesChart = Charts.TotalSaleChart;
  public totalprojectChart = Charts.TotalProjectChart;
  public totalproductChart = Charts.TotalProductChart;
}

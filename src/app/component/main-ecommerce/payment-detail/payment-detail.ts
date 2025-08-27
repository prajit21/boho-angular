import { Component } from '@angular/core';

import { Cod } from './cod/cod';
import { CreditCard } from './credit-card/credit-card';
import { DebitCard } from './debit-card/debit-card';
import { Emi } from './emi/emi';
import { NetBanking } from './net-banking/net-banking';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.html',
  styleUrls: ['./payment-detail.scss'],
  imports: [CreditCard, DebitCard, Cod, Emi, NetBanking],
})
export class PaymentDetail {}

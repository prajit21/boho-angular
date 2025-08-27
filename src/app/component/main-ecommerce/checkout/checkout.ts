import { Component } from '@angular/core';

import { Billing } from './billing/billing';
import { PlaceOrder } from './place-order/place-order';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.scss'],
  imports: [Billing, PlaceOrder],
})
export class Checkout {}

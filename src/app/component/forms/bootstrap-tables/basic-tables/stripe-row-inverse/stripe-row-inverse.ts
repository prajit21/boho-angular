import { Component } from '@angular/core';

import * as Data from '../../../../../shared/data/data/forms/bootstrap-table';

@Component({
  selector: 'app-stripe-row-inverse',
  templateUrl: './stripe-row-inverse.html',
  styleUrls: ['./stripe-row-inverse.scss'],
  imports: [],
})
export class StripeRowInverse {
  public stripeRowInverseData = Data.stripeRowInverseData;
}

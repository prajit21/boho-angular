import { Component, input } from '@angular/core';

import { Simplepricingcard } from '../../../../shared/data/data/ecommerce/common-pricing-data';

@Component({
  selector: 'app-common-simple-pricing-card',
  templateUrl: './common-simple-pricing-card.html',
  styleUrls: ['./common-simple-pricing-card.scss'],
  imports: [],
})
export class CommonSimplePricingCard {
  readonly data = input<Simplepricingcard>();
}

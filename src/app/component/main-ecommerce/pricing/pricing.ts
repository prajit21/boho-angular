import { Component } from '@angular/core';

import { CommonBecomeMember } from './common-become-member/common-become-member';
import { CommonSimplePricingCard } from './common-simple-pricing-card/common-simple-pricing-card';
import * as Data from '../../../shared/data/data/ecommerce/common-pricing-data';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.html',
  styleUrls: ['./pricing.scss'],
  imports: [CommonBecomeMember, CommonSimplePricingCard],
})
export class Pricing {
  public becomememberData = Data.BecomeMember;
  public simplepricingcardData = Data.SimplePricingCard;
}

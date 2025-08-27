import { Component, input } from '@angular/core';

import { Becomemember } from '../../../../shared/data/data/ecommerce/common-pricing-data';

@Component({
  selector: 'app-common-become-member',
  templateUrl: './common-become-member.html',
  styleUrls: ['./common-become-member.scss'],
  imports: [],
})
export class CommonBecomeMember {
  readonly data = input<Becomemember>();
}

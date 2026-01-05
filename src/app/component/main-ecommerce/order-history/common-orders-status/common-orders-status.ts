import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

import { Orders } from '../../../../../app/shared/data/data/ecommerce/order-history';
import { FeatherIcons } from '../../../../shared/component/feather-icons/feather-icons';

@Component({
  selector: 'app-common-orders-status',
  templateUrl: './common-orders-status.html',
  styleUrls: ['./common-orders-status.scss'],
  imports: [FeatherIcons, NgClass],
})
export class CommonOrdersStatus {
  readonly data = input<Orders>();
}

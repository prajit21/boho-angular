import { Component } from '@angular/core';

import * as manageorder from '../../../../shared/data/data/ecommerce/manage-order';
import { ClickOutsideDirective } from '../../../../shared/directive/outside.directive';

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.html',
  styleUrls: ['./manage-order.scss'],
  imports: [ClickOutsideDirective],
})
export class ManageOrder {
  public ManageOrder = manageorder.ManageOrder;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }
}

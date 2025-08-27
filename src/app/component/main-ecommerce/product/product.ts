import { Component, inject } from '@angular/core';

import { Features } from './features/features';
import { Products } from './products/products';
import { FeatherIcons } from '../../../shared/component/feather-icons/feather-icons';
import { ClickOutsideDirective } from '../../../shared/directive/outside.directive';
import { ProductBoxFilterService } from '../../../shared/services/ecommerce/product-box-filter.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.html',
  styleUrls: ['./product.scss'],
  imports: [FeatherIcons, Features, Products, ClickOutsideDirective],
})
export class Product {
  private productboxfilterService = inject(ProductBoxFilterService);

  listView: boolean = false;
  openSidebar: boolean = false;
  OpenFilter: Boolean = false;

  gridOpens() {
    this.listView = false;
    this.productboxfilterService.gridOpen();
  }
  listOpens() {
    this.listView = true;
    this.productboxfilterService.listOpen();
  }
  grid2s() {
    this.listView = false;
    this.productboxfilterService.grid2();
  }
  grid3s() {
    this.listView = false;
    this.productboxfilterService.grid3();
  }
  grid6s() {
    this.listView = false;
    this.productboxfilterService.grid6();
  }

  sidebarToggle() {
    this.openSidebar = !this.openSidebar;
  }

  openFilter() {
    this.openSidebar = !this.openSidebar;
  }
}

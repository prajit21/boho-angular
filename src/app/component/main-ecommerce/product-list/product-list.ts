import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

import * as Data from '../../../shared/tables/main-ecommerce/product-list';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.scss'],
  imports: [NgClass],
})
export class ProductList {
  public PublicListData = Data.ProductList;
}

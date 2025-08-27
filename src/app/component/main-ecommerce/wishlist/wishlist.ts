import { Component } from '@angular/core';

import * as Data from '../../../shared/data/data/ecommerce/wishlist';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.html',
  styleUrls: ['./wishlist.scss'],
  imports: [],
})
export class Wishlist {
  public wishlistData = Data.WishlistData;
}

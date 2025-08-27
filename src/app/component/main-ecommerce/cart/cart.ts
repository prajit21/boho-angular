import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FeatherIcons } from '../../../shared/component/feather-icons/feather-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss'],
  imports: [FeatherIcons, RouterLink],
})
export class Cart {
  cartItem = [
    {
      id: 1,
      img: 'assets/images/product/1.png',
      name: 'Long Top',
      price: '21',
      counter: 5,
      total: '12456',
    },
    {
      id: 2,
      img: 'assets/images/product/13.png',
      name: 'Fancy watch',
      price: '50',
      counter: 5,
      total: '12456',
    },
    {
      id: 3,
      img: 'assets/images/product/4.png',
      name: 'Man shoes',
      price: '11',
      counter: 5,
      total: '123456',
    },
  ];

  decrement(id: number) {
    if (this.cartItem[id - 1].counter > 1) {
      this.cartItem[id - 1].counter -= 1;
    }
  }

  increment(id: number) {
    this.cartItem[id - 1].counter += 1;
  }
}

import { Routes } from '@angular/router';

import { Cart } from './cart/cart';
import { Checkout } from './checkout/checkout';
import { Invoice } from './invoice/invoice';
import { OrderHistory } from './order-history/order-history';
import { PaymentDetail } from './payment-detail/payment-detail';
import { Pricing } from './pricing/pricing';
import { Product } from './product/product';
import { ProductList } from './product-list/product-list';
import { ProductPage } from './product-page/product-page';
import { Wishlist } from './wishlist/wishlist';

export default [
  {
    path: 'product',
    component: Product,
    data: {
      title: 'Product',
      breadcrumb: 'Product',
    },
  },
  {
    path: 'product-page',
    component: ProductPage,
    data: {
      title: 'Product Page',
      breadcrumb: 'Product Page',
    },
  },
  {
    path: 'product-list',
    component: ProductList,
    data: {
      title: 'Product List',
      breadcrumb: 'Product List',
    },
  },
  {
    path: 'payment-detail',
    component: PaymentDetail,
    data: {
      title: 'Payment Detail',
      breadcrumb: 'Payment Detail',
    },
  },
  {
    path: 'order-history',
    component: OrderHistory,
    data: {
      title: 'Recent Orders',
      breadcrumb: 'Recent Orders',
    },
  },
  {
    path: 'invoice',
    component: Invoice,
    data: {
      title: 'Invoice',
      breadcrumb: 'Invoice',
    },
  },
  {
    path: 'cart',
    component: Cart,
    data: {
      title: 'Cart',
      breadcrumb: 'Cart',
    },
  },
  {
    path: 'wishlist',
    component: Wishlist,
    data: {
      title: 'Wishlist',
      breadcrumb: 'Wishlist',
    },
  },
  {
    path: 'checkout',
    component: Checkout,
    data: {
      title: 'Checkout',
      breadcrumb: 'Checkout',
    },
  },
  {
    path: 'pricing',
    component: Pricing,
    data: {
      title: 'Pricing',
      breadcrumb: 'Pricing',
    },
  },
] as Routes;

import { Component, OnInit, inject, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgbRatingConfig, NgbRating } from '@ng-bootstrap/ng-bootstrap';

import { IProducts } from '../../../../shared/modal/products.modal';
import { ProductBoxFilterService } from '../../../../shared/services/ecommerce/product-box-filter.service';
import { ProductsService } from '../../../../shared/services/ecommerce/products.service';
import { QuickView } from '../quick-view/quick-view';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrls: ['./products.scss'],
  imports: [RouterLink, NgbRating, QuickView],
})
export class Products implements OnInit {
  private productsService = inject(ProductsService);
  productboxfilterService = inject(ProductBoxFilterService);
  config = inject(NgbRatingConfig);

  readonly ConfirmationModal = viewChild<QuickView>('confirmationModal');

  public value = 0;

  public listView: boolean = false;
  public col_xl_12: boolean = false;
  public col_xl_2: boolean = false;

  public col_sm_3: boolean = false;
  public col_xl_3: boolean = true;
  public xl_4: boolean = true;
  public col_sm_4: boolean = false;
  public col_xl_4: boolean = false;
  public col_sm_6: boolean = true;
  public col_xl_6: boolean = false;
  public gridOptions: boolean = true;
  public active: boolean = false;

  constructor() {
    const config = this.config;

    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    this.productsService.products().subscribe(data => {
      this.listData = data;
    });
  }

  listData: IProducts[] = [];

  ngDoCheck() {
    this.col_xl_12 = this.productboxfilterService.col_xl_12;
    this.col_xl_2 = this.productboxfilterService.col_xl_2;
    this.col_sm_3 = this.productboxfilterService.col_xl_12;
    this.col_xl_3 = this.productboxfilterService.col_xl_3;
    this.xl_4 = this.productboxfilterService.xl_4;
    this.col_sm_4 = this.productboxfilterService.col_sm_4;
    this.col_xl_4 = this.productboxfilterService.col_xl_4;
    this.col_sm_6 = this.productboxfilterService.col_sm_6;
    this.col_xl_6 = this.productboxfilterService.col_xl_6;
  }
}

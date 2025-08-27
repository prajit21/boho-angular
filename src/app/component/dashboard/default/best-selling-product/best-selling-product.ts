import { DecimalPipe, AsyncPipe } from '@angular/common';
import { Component, inject, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Observable } from 'rxjs';

import { sellingProduct } from '../../../../shared/data/data/default-dashboard/best-selling-product';
import { ClickOutsideDirective } from '../../../../shared/directive/outside.directive';
import { SortEvent, SortableDirective } from '../../../../shared/directive/sortable.directive';
import { TablesService } from '../../../../shared/services/tables/tables.service';
import { CommonDataTable } from '../common-data-table/common-data-table';

@Component({
  selector: 'app-best-selling-product',
  templateUrl: './best-selling-product.html',
  styleUrls: ['./best-selling-product.scss'],
  providers: [TablesService, DecimalPipe],
  imports: [FormsModule, ClickOutsideDirective, CommonDataTable, AsyncPipe],
})
export class BestSellingProduct {
  service = inject(TablesService);

  public isShow: boolean = false;
  public selling$: Observable<sellingProduct[]>;
  public total$: Observable<number>;

  readonly headers = viewChildren(SortableDirective);

  constructor() {
    const service = this.service;

    this.selling$ = service.selling$;
    this.total$ = service.total$;
  }

  onSort({ column, direction }: SortEvent) {
    this.headers().forEach(header => {
      if (header.sortable() !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  removeItem(id: number) {
    this.selling$.subscribe((data: sellingProduct[]) => {
      data.map((elem: sellingProduct, i: number) => {
        elem.id == id && data.splice(i, 1);
      });
    });
  }

  openMenu() {
    this.isShow = !this.isShow;
  }
}

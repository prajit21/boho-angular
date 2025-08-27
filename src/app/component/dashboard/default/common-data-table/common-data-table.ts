import { AsyncPipe, DecimalPipe } from '@angular/common';
import { Component, inject, viewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Observable } from 'rxjs';

import { FeatherIcons } from '../../../../shared/component/feather-icons/feather-icons';
import { sellingProduct } from '../../../../shared/data/data/default-dashboard/best-selling-product';
import { SortEvent, SortableDirective } from '../../../../shared/directive/sortable.directive';
import { TablesService } from '../../../../shared/services/tables/tables.service';

@Component({
  selector: 'app-common-data-table',
  templateUrl: './common-data-table.html',
  styleUrls: ['./common-data-table.scss'],
  imports: [SortableDirective, RouterLink, FeatherIcons, AsyncPipe, DecimalPipe],
})
export class CommonDataTable {
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
}

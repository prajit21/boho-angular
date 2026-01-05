import { DecimalPipe, AsyncPipe } from '@angular/common';
import { Component, inject, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

import { sellingProduct } from '../../../shared/data/data/default-dashboard/best-selling-product';
import { SortableDirective, SortEvent } from '../../../shared/directive/sortable.directive';
import { TablesService } from '../../../shared/services/tables/tables.service';
import { CommonDataTable } from '../../dashboard/default/common-data-table/common-data-table';

@Component({
  selector: 'app-data-tables',
  templateUrl: './data-tables.html',
  styleUrls: ['./data-tables.scss'],
  providers: [TablesService, DecimalPipe],
  imports: [FormsModule, CommonDataTable, NgbPagination, AsyncPipe],
})
export class DataTables {
  service = inject(TablesService);

  selling$: Observable<sellingProduct[]>;
  total$: Observable<number>;

  readonly headers = viewChildren(SortableDirective);

  constructor() {
    const service = this.service;

    this.selling$ = service.selling$;
    this.total$ = service.total$;
  }

  onSort({ column, direction }: SortEvent) {
    this.headers().forEach(header => {
      if (header.sortable() !== column) {
        header.currentDirection.set('');
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

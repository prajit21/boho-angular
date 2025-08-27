import { AsyncPipe, CommonModule, DecimalPipe } from '@angular/common';
import { Component, inject, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

import { supportDB } from '../../../shared/data/data/support-ticket/support-ticket';
import {
  NgbdSortableHeader2Directive,
  SortEvent,
} from '../../../shared/directive/support-ticket.directive';
import { SupportTicketService } from '../../../shared/services/support-ticket/support-ticket.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.html',
  styleUrls: ['./data-table.scss'],
  imports: [FormsModule, NgbdSortableHeader2Directive, NgbPagination, AsyncPipe, CommonModule],
  providers: [DecimalPipe, SupportTicketService],
})
export class DataTable {
  service = inject(SupportTicketService);

  countries$: Observable<supportDB[]>;
  total$: Observable<number>;
  readonly headers = viewChildren(NgbdSortableHeader2Directive);

  constructor() {
    const service = this.service;

    this.countries$ = service.support$;
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
}

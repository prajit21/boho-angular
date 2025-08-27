import { Component } from '@angular/core';

import { DefaultPagination } from './default-pagination/default-pagination';
import { PaginationActiveDisabled } from './pagination-active-disabled/pagination-active-disabled';
import { PaginationAlignment } from './pagination-alignment/pagination-alignment';
import { PaginationIcon } from './pagination-icon/pagination-icon';
import { PaginationSizing } from './pagination-sizing/pagination-sizing';
import { RoundedPagination } from './rounded-pagination/rounded-pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.html',
  styleUrls: ['./pagination.scss'],
  imports: [
    DefaultPagination,
    PaginationActiveDisabled,
    PaginationIcon,
    RoundedPagination,
    PaginationAlignment,
    PaginationSizing,
  ],
})
export class Pagination {}

import { Component, inject } from '@angular/core';

import { NgxPrintDirective } from 'ngx-print';

import { InvioceDataTable } from './invioce-data-table/invioce-data-table';
import { LayoutService } from '../../../shared/services/layout.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.html',
  styleUrls: ['./invoice.scss'],
  imports: [InvioceDataTable, NgxPrintDirective],
})
export class Invoice {
  layout = inject(LayoutService);
}

import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/ecommerce/invoice';

@Component({
  selector: 'app-invioce-data-table',
  templateUrl: './invioce-data-table.html',
  styleUrls: ['./invioce-data-table.scss'],
  imports: [],
})
export class InvioceDataTable {
  public invoiceData = Data.InvoiceData;
}

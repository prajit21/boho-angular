import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import * as transactionhistory from '../../../../shared/data/data/ecommerce/transaction-history';
import { ClickOutsideDirective } from '../../../../shared/directive/outside.directive';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.html',
  styleUrls: ['./transaction-history.scss'],
  imports: [RouterLink, CommonModule, ClickOutsideDirective],
})
export class TransactionHistory {
  public transactionData = transactionhistory.TracsactionHistory;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }
}

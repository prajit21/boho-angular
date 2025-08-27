import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/email/email-user';

@Component({
  selector: 'app-email-user',
  templateUrl: './email-user.html',
  styleUrls: ['./email-user.scss'],
  imports: [],
})
export class EmailUser {
  public userData = Data.Users;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }
}

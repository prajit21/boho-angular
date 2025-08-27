import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/chat/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.html',
  styleUrls: ['./users.scss'],
  imports: [],
})
export class Users {
  public userData = Data.Users;
}

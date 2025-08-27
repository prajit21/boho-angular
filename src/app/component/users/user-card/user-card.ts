import { Component } from '@angular/core';

import * as Data from '../../../shared/data/data/users/user-card';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.html',
  styleUrls: ['./user-card.scss'],
  imports: [],
})
export class UserCard {
  public usercardData = Data.UserCardData;
}

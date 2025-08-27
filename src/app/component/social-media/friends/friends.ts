import { Component } from '@angular/core';

import * as Data from '../../../shared/data/data/users/user-card';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.html',
  styleUrls: ['./friends.scss'],
  imports: [],
})
export class Friends {
  public friendsData = Data.UserCardData;
}

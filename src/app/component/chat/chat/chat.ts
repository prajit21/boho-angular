import { Component } from '@angular/core';

import { Menu } from '../menu/menu';
import { Users } from './users/users';
import { UsersChat } from './users-chat/users-chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.html',
  styleUrls: ['./chat.scss'],
  imports: [Users, UsersChat, Menu],
})
export class Chat {
  public filterValue: boolean;
  receiverFilterValue(value: boolean) {
    this.filterValue = value;
  }
}

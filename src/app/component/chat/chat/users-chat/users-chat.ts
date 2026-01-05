import { NgClass } from '@angular/common';
import { Component, output } from '@angular/core';

import { chatData } from '../../../../shared/data/data/chat/chat';

@Component({
  selector: 'app-users-chat',
  templateUrl: './users-chat.html',
  styleUrls: ['./users-chat.scss'],
  imports: [NgClass],
})
export class UsersChat {
  public chatData = chatData;
  public open: boolean = false;

  readonly filterValue = output<boolean>();

  openFilter() {
    this.open = !this.open;
    this.filterValue.emit(this.open);
  }
}

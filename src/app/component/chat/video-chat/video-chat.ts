import { Component } from '@angular/core';

import { Users } from '../chat/users/users';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-video-chat',
  templateUrl: './video-chat.html',
  styleUrls: ['./video-chat.scss'],
  imports: [Users, Menu],
})
export class VideoChat {
  public open: boolean = false;

  openFilter() {
    this.open = !this.open;
  }
}

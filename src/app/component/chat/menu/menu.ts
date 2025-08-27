import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import * as Data from '../../../shared/data/data/chat/call';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss'],
  imports: [CommonModule],
})
export class Menu {
  public callData = Data.CallData;
  public openTab: string = 'call';

  public tabbed(val: string) {
    this.openTab = val;
  }
}

import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.html',
  styleUrls: ['./description.scss'],
  imports: [NgClass],
})
export class Description {
  public openTab: string = 'febric';

  constructor() {}
  public tabbed(val: string) {
    this.openTab = val;
  }
}

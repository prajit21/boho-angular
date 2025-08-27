import { Component } from '@angular/core';

@Component({
  selector: 'app-segmented-button',
  templateUrl: './segmented-button.html',
  styleUrls: ['./segmented-button.scss'],
  imports: [],
})
export class SegmentedButton {
  public show: boolean = false;
  public show2: boolean = false;

  openMenu() {
    this.show = !this.show;
  }

  openMenu2() {
    this.show2 = !this.show2;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-nesting-button-group',
  templateUrl: './nesting-button-group.html',
  styleUrls: ['./nesting-button-group.scss'],
  imports: [],
})
export class NestingButtonGroup {
  public show: boolean = false;

  openMenu() {
    this.show = !this.show;
  }
}

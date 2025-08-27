import { Component } from '@angular/core';

@Component({
  selector: 'app-ui-component',
  templateUrl: './ui-component.html',
  styleUrls: ['./ui-component.scss'],
  imports: [],
})
export class UiComponent {
  public open: boolean = false;

  openMenu() {
    this.open = !this.open;
  }
}

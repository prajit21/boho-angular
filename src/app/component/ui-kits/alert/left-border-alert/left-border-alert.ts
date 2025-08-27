import { Component } from '@angular/core';

@Component({
  selector: 'app-left-border-alert',
  templateUrl: './left-border-alert.html',
  styleUrls: ['./left-border-alert.scss'],
  imports: [],
})
export class LeftBorderAlert {
  staticAlertClosed = false;

  closed() {
    this.staticAlertClosed = true;
  }
}

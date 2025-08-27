import { Component } from '@angular/core';

@Component({
  selector: 'app-dismiss-light-alert',
  templateUrl: './dismiss-light-alert.html',
  styleUrls: ['./dismiss-light-alert.scss'],
  imports: [],
})
export class DismissLightAlert {
  staticAlertClosed = false;

  closed() {
    this.staticAlertClosed = true;
  }
}

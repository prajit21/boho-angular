import { Component } from '@angular/core';

@Component({
  selector: 'app-dismiss-dark-alert',
  templateUrl: './dismiss-dark-alert.html',
  styleUrls: ['./dismiss-dark-alert.scss'],
  imports: [],
})
export class DismissDarkAlert {
  staticAlertClosed = false;

  closed() {
    this.staticAlertClosed = true;
  }
}

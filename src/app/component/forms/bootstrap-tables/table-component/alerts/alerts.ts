import { Component } from '@angular/core';

import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.html',
  styleUrls: ['./alerts.scss'],
  imports: [NgbAlert],
})
export class Alerts {
  staticAlertClosed = false;
  staticAlert1Closed = false;
}

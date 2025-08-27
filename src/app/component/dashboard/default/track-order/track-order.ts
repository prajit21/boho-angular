import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import * as traceorder from '../../../../shared/data/data/default-dashboard/track-order';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.html',
  styleUrls: ['./track-order.scss'],
  imports: [RouterLink],
})
export class TrackOrder {
  trackOrder = traceorder.trackOrder;
}

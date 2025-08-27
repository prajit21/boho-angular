import { Component } from '@angular/core';

import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-horizontial-rating-bar',
  templateUrl: './horizontial-rating-bar.html',
  styleUrls: ['./horizontial-rating-bar.scss'],
  imports: [BarRatingModule],
})
export class HorizontialRatingBar {
  verticalRate = 1;
}

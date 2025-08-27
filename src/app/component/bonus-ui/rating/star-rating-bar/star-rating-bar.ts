import { Component } from '@angular/core';

import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-star-rating-bar',
  templateUrl: './star-rating-bar.html',
  styleUrls: ['./star-rating-bar.scss'],
  imports: [BarRatingModule],
})
export class StarRatingBar {
  cssRate = 2.6;
}

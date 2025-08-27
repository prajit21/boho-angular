import { Component } from '@angular/core';

import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-moving-rating',
  templateUrl: './moving-rating.html',
  styleUrls: ['./moving-rating.scss'],
  imports: [BarRatingModule],
})
export class MovingRating {
  movieRate = 0;
}

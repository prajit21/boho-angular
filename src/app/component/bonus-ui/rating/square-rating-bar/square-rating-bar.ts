import { Component } from '@angular/core';

import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-square-rating-bar',
  templateUrl: './square-rating-bar.html',
  styleUrls: ['./square-rating-bar.scss'],
  imports: [BarRatingModule],
})
export class SquareRatingBar {
  squareRate = 1;
}

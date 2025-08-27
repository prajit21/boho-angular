import { Component } from '@angular/core';

import { CurrentRatingBar } from './current-rating-bar/current-rating-bar';
import { HorizontialRatingBar } from './horizontial-rating-bar/horizontial-rating-bar';
import { MovingRating } from './moving-rating/moving-rating';
import { NumberRating } from './number-rating/number-rating';
import { SquareRatingBar } from './square-rating-bar/square-rating-bar';
import { StarRatingBar } from './star-rating-bar/star-rating-bar';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.html',
  styleUrls: ['./rating.scss'],
  imports: [
    NumberRating,
    MovingRating,
    SquareRatingBar,
    StarRatingBar,
    HorizontialRatingBar,
    CurrentRatingBar,
  ],
})
export class Rating {}

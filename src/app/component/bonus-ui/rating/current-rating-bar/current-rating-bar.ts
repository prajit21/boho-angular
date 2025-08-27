import { Component, inject } from '@angular/core';

import { FaIconLibrary, FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar, faStarHalfAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-current-rating-bar',
  templateUrl: './current-rating-bar.html',
  styleUrls: ['./current-rating-bar.scss'],
  imports: [BarRatingModule, FaIconComponent],
})
export class CurrentRatingBar {
  faoRate = 5.6;
  faoRated = false;

  constructor() {
    const library = inject(FaIconLibrary);

    library.addIcons(faStar, faStarHalfAlt, farStar, faTimesCircle);
  }

  onFaoRate(e: number) {
    this.faoRated = true;
    this.faoRate = e;
  }

  faoReset() {
    this.faoRated = false;
    this.faoRate = 5.6;
  }
}

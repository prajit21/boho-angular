import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-details',
  templateUrl: './details.html',
  styleUrls: ['./details.scss'],
  imports: [BarRatingModule, RouterLink],
})
export class Details {
  public cssRate = 1;
}

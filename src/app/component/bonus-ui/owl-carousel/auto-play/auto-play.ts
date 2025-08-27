import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import * as Data from '../../../../shared/data/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-auto-play',
  templateUrl: './auto-play.html',
  styleUrls: ['./auto-play.scss'],
  imports: [CarouselModule],
})
export class AutoPlay {
  public autoPlayOptions = Data.autoPlayOptions;
  public autoPlayData = Data.autoPlayData;
}

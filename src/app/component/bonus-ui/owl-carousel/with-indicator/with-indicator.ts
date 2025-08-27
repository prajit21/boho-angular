import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import * as Data from '../../../../shared/data/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-with-indicator',
  templateUrl: './with-indicator.html',
  styleUrls: ['./with-indicator.scss'],
  imports: [CarouselModule],
})
export class WithIndicator {
  public withIndicatorOptions = Data.withIndicatorOptions;
  public withIndicatorData = Data.withIndicatorData;
}

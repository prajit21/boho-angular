import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import * as Data from '../../../../shared/data/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-with-caption',
  templateUrl: './with-caption.html',
  styleUrls: ['./with-caption.scss'],
  imports: [CarouselModule],
})
export class WithCaption {
  public withIndicatorOptions = Data.withIndicatorOptions;
  public withCaptionData = Data.withCaptionData;
}

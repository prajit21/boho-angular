import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import * as Data from '../../../../shared/data/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-dark-variant',
  templateUrl: './dark-variant.html',
  styleUrls: ['./dark-variant.scss'],
  imports: [CarouselModule],
})
export class DarkVariant {
  public darkVariantData = Data.darkVariantData;
  public withIndicatorOptions = Data.withIndicatorOptions;
}

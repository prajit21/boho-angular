import { Component } from '@angular/core';

import { AutoPlay } from './auto-play/auto-play';
import { CrossFade } from './cross-fade/cross-fade';
import { DarkVariant } from './dark-variant/dark-variant';
import { SlidesOnly } from './slides-only/slides-only';
import { WithCaption } from './with-caption/with-caption';
import { WithControls } from './with-controls/with-controls';
import { WithIndicator } from './with-indicator/with-indicator';

@Component({
  selector: 'app-owl-carousel',
  templateUrl: './owl-carousel.html',
  styleUrls: ['./owl-carousel.scss'],
  imports: [SlidesOnly, WithControls, AutoPlay, WithIndicator, WithCaption, CrossFade, DarkVariant],
})
export class OwlCarousel {}

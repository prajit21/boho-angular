import { Component } from '@angular/core';

import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.html',
  styleUrls: ['./timeline.scss'],
  imports: [CarouselModule],
})
export class Timeline {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
    dots: false,
    nav: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
  };
}

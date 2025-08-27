import { Component } from '@angular/core';

import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-disabled-slider',
  templateUrl: './disabled-slider.html',
  styleUrls: ['./disabled-slider.scss'],
  imports: [NgxSliderModule],
})
export class DisabledSlider {
  value: number = 550;

  options: Options = {
    floor: 100,
    ceil: 1000,
    disabled: true,
  };
}

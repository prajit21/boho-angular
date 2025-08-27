import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-default-slider',
  templateUrl: './default-slider.html',
  styleUrls: ['./default-slider.scss'],
  imports: [FormsModule, NgxSliderModule],
})
export class DefaultSlider {
  value: number = 550;
  options: Options = {
    floor: 100,
    ceil: 1000,
  };
}

import { Component } from '@angular/core';

import * as Data from '../../../shared/data/data/gallery/hover';

@Component({
  selector: 'app-hover-effect',
  templateUrl: './hover-effect.html',
  styleUrls: ['./hover-effect.scss'],
  imports: [],
})
export class HoverEffect {
  public imgData = Data.imgData;
  public hoverData = Data.hoverData;
}

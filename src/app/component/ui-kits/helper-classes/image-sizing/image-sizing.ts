import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/ui-kits/helper-classes';

@Component({
  selector: 'app-image-sizing',
  templateUrl: './image-sizing.html',
  styleUrls: ['./image-sizing.scss'],
  imports: [],
})
export class ImageSizing {
  public imageSizeData = Data.imageSizeData;
}

import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/ui-kits/helper-classes';

@Component({
  selector: 'app-font-size',
  templateUrl: './font-size.html',
  styleUrls: ['./font-size.scss'],
  imports: [],
})
export class FontSize {
  public fontSizeData = Data.fontSizeData;
}

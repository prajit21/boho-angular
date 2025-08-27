import { Component } from '@angular/core';

import { BorderColors } from './border-colors/border-colors';
import { CommonHelperClasses } from './common-helper-classes/common-helper-classes';
import { CommonText } from './common-text/common-text';
import { FontSize } from './font-size/font-size';
import { FontStyle } from './font-style/font-style';
import { ImageSizing } from './image-sizing/image-sizing';
import * as Data from '../../../shared/data/data/ui-kits/helper-classes';

@Component({
  selector: 'app-helper-classes',
  templateUrl: './helper-classes.html',
  styleUrls: ['./helper-classes.scss'],
  imports: [CommonHelperClasses, BorderColors, ImageSizing, FontStyle, CommonText, FontSize],
})
export class HelperClasses {
  public commonHelperData = Data.BorderAndDisplayData;
  public styleBorderData = Data.StyleBorderData;
  public backgroundColorsData = Data.backgroundColorsData;
  public fontWeightData = Data.FontWeightData;
  public textColorData = Data.textColorData;
}

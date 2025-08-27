import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/ui-kits/helper-classes';

@Component({
  selector: 'app-border-colors',
  templateUrl: './border-colors.html',
  styleUrls: ['./border-colors.scss'],
  imports: [],
})
export class BorderColors {
  public borderColorData = Data.borderColor;
}

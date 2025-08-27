import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/bonus-ui/ribbons';

@Component({
  selector: 'app-left-ribbons',
  templateUrl: './left-ribbons.html',
  styleUrls: ['./left-ribbons.scss'],
  imports: [],
})
export class LeftRibbons {
  public leftRinnobsData = Data.leftRinnobsData;
}

import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/ui-kits/progress-bar';

@Component({
  selector: 'app-custom-progress-bar',
  templateUrl: './custom-progress-bar.html',
  styleUrls: ['./custom-progress-bar.scss'],
})
export class CustomProgressBar {
  public customeProgressData = Data.customeProgressData;
}

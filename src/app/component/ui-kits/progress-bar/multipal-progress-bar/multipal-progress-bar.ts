import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/ui-kits/progress-bar';

@Component({
  selector: 'app-multipal-progress-bar',
  templateUrl: './multipal-progress-bar.html',
  styleUrls: ['./multipal-progress-bar.scss'],
})
export class MultipalProgressBar {
  public multipalBarData = Data.multipalBarData;
}

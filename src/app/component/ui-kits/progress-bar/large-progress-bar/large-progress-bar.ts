import { Component } from '@angular/core';

import { largeProgressBarData } from '../../../../shared/data/data/ui-kits/progress-bar';

@Component({
  selector: 'app-large-progress-bar',
  templateUrl: './large-progress-bar.html',
  styleUrls: ['./large-progress-bar.scss'],
})
export class LargeProgressBar {
  public largeProgressBarData = largeProgressBarData;
}

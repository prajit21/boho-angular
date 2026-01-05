import { Component } from '@angular/core';

import { customHeightProgressBarData } from '../../../../shared/data/data/ui-kits/progress-bar';

@Component({
  selector: 'app-custom-height-progressbar',
  templateUrl: './custom-height-progressbar.html',
  styleUrls: ['./custom-height-progressbar.scss'],
})
export class CustomHeightProgressbar {
  public customHeightProgressBarData = customHeightProgressBarData;
}

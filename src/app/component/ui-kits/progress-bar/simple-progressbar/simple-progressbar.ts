import { Component } from '@angular/core';

import { basicProgressBarData } from '../../../../shared/data/data/ui-kits/progress-bar';

@Component({
  selector: 'app-simple-progressbar',
  templateUrl: './simple-progressbar.html',
  styleUrls: ['./simple-progressbar.scss'],
})
export class SimpleProgressbar {
  public basicProgressBarData = basicProgressBarData;
}

import { Component } from '@angular/core';

import { CommonProgressBar } from './common-progress-bar/common-progress-bar';
import { CustomHeightProgressbar } from './custom-height-progressbar/custom-height-progressbar';
import { CustomProgressBar } from './custom-progress-bar/custom-progress-bar';
import { LargeProgressBar } from './large-progress-bar/large-progress-bar';
import { MultipalProgressBar } from './multipal-progress-bar/multipal-progress-bar';
import { ProgressNumberStap } from './progress-number-stap/progress-number-stap';
import { SimpleProgressbar } from './simple-progressbar/simple-progressbar';
import { SmallProgressBar } from './small-progress-bar/small-progress-bar';
import * as Data from '../../../shared/data/data/ui-kits/progress-bar';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.html',
  styleUrls: ['./progress-bar.scss'],
  imports: [
    SimpleProgressbar,
    CommonProgressBar,
    MultipalProgressBar,
    ProgressNumberStap,
    CustomProgressBar,
    SmallProgressBar,
    LargeProgressBar,
    CustomHeightProgressbar,
  ],
})
export class ProgressBar {
  public basicProgressBarData = Data.basicProgressBarData;
  public stripedData = Data.stripedData;
  public stripedAnimatedData = Data.stripedAnimatedData;
  public smallProgressBarData = Data.smallProgressBarData;
  public largeProgressBarData = Data.largeProgressBarData;
}

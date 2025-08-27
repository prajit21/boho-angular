import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { smallProgressBarData } from '../../../../shared/data/data/ui-kits/progress-bar';

@Component({
  selector: 'app-small-progress-bar',
  templateUrl: './small-progress-bar.html',
  styleUrls: ['./small-progress-bar.scss'],
  imports: [CommonModule],
})
export class SmallProgressBar {
  public smallProgressBarData = smallProgressBarData;
}

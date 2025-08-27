import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { largeProgressBarData } from '../../../../shared/data/data/ui-kits/progress-bar';

@Component({
  selector: 'app-large-progress-bar',
  templateUrl: './large-progress-bar.html',
  styleUrls: ['./large-progress-bar.scss'],
  imports: [CommonModule],
})
export class LargeProgressBar {
  public largeProgressBarData = largeProgressBarData;
}

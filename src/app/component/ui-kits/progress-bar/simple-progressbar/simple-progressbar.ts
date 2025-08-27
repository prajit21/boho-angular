import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { basicProgressBarData } from '../../../../shared/data/data/ui-kits/progress-bar';

@Component({
  selector: 'app-simple-progressbar',
  templateUrl: './simple-progressbar.html',
  styleUrls: ['./simple-progressbar.scss'],
  imports: [CommonModule],
})
export class SimpleProgressbar {
  public basicProgressBarData = basicProgressBarData;
}

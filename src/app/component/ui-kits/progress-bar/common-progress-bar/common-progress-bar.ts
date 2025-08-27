import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { progresBar } from '../../../../shared/data/data/ui-kits/progress-bar';

@Component({
  selector: 'app-common-progress-bar',
  templateUrl: './common-progress-bar.html',
  styleUrls: ['./common-progress-bar.scss'],
  imports: [CommonModule],
})
export class CommonProgressBar {
  readonly data = input<progresBar>();
}

import { Component, input } from '@angular/core';

import { progresBar } from '../../../../shared/data/data/ui-kits/progress-bar';

@Component({
  selector: 'app-common-progress-bar',
  templateUrl: './common-progress-bar.html',
  styleUrls: ['./common-progress-bar.scss'],
})
export class CommonProgressBar {
  readonly data = input<progresBar>();
}

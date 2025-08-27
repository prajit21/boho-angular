import { Component, input } from '@angular/core';

import { commonText } from '../../../../shared/data/data/ui-kits/helper-classes';

@Component({
  selector: 'app-common-text',
  templateUrl: './common-text.html',
  styleUrls: ['./common-text.scss'],
  imports: [],
})
export class CommonText {
  readonly data = input<commonText>();
}

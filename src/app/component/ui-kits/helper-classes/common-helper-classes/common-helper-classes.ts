import { Component, input } from '@angular/core';

import { commonHelperClasses } from '../../../../shared/data/data/ui-kits/helper-classes';

@Component({
  selector: 'app-common-helper-classes',
  templateUrl: './common-helper-classes.html',
  styleUrls: ['./common-helper-classes.scss'],
  imports: [],
})
export class CommonHelperClasses {
  readonly data = input<commonHelperClasses>();
}

import { Component, input } from '@angular/core';

import { FeatherIcons } from '../../../../shared/component/feather-icons/feather-icons';
import { commonTagPills } from '../../../../shared/data/data/ui-kits/tag-pills';

@Component({
  selector: 'app-common-tag-pills',
  templateUrl: './common-tag-pills.html',
  styleUrls: ['./common-tag-pills.scss'],
  imports: [FeatherIcons],
})
export class CommonTagPills {
  readonly data = input<commonTagPills>();
}

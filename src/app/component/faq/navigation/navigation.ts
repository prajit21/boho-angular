import { Component } from '@angular/core';

import { FeatherIcons } from '../../../shared/component/feather-icons/feather-icons';
import { navigationData1, navigationData2 } from '../../../shared/data/data/faq/faq';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.html',
  styleUrls: ['./navigation.scss'],
  imports: [FeatherIcons],
})
export class Navigation {
  public navigationData1 = navigationData1;
  public navigationData2 = navigationData2;
}

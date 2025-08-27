import { Component } from '@angular/core';

import { FeatherIcons } from '../../../../shared/component/feather-icons/feather-icons';
import * as Data from '../../../../shared/data/data/ui-kits/tag-pills';

@Component({
  selector: 'app-badge-button',
  templateUrl: './badge-button.html',
  styleUrls: ['./badge-button.scss'],
  imports: [FeatherIcons],
})
export class BadgeButton {
  public badgeButtonData = Data.badgeButtonData;
}

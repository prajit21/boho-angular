import { Component } from '@angular/core';

import {
  NgbDropdown,
  NgbDropdownToggle,
  NgbDropdownMenu,
  NgbDropdownItem,
} from '@ng-bootstrap/ng-bootstrap';

import * as Data from '../../../../shared/data/data/ui-kits/dropdown';

@Component({
  selector: 'app-helper-card-dropdown',
  templateUrl: './helper-card-dropdown.html',
  styleUrls: ['./helper-card-dropdown.scss'],
  imports: [NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem],
})
export class HelperCardDropdown {
  public helperCardData = Data.helperCardData;
}

import { Component } from '@angular/core';

import {
  NgbDropdown,
  NgbDropdownToggle,
  NgbDropdownMenu,
  NgbDropdownItem,
} from '@ng-bootstrap/ng-bootstrap';

import * as Data from '../../../../shared/data/data/ui-kits/dropdown';

@Component({
  selector: 'app-split-dropdown',
  templateUrl: './split-dropdown.html',
  styleUrls: ['./split-dropdown.scss'],
  imports: [NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem],
})
export class SplitDropdown {
  public splitDropdownData = Data.splitDropdownData;
}

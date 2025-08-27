import { Component } from '@angular/core';

import {
  NgbDropdown,
  NgbDropdownToggle,
  NgbDropdownMenu,
  NgbDropdownItem,
} from '@ng-bootstrap/ng-bootstrap';

import * as Data from '../../../../shared/data/data/ui-kits/dropdown';

@Component({
  selector: 'app-justify-content-dropdown',
  templateUrl: './justify-content-dropdown.html',
  styleUrls: ['./justify-content-dropdown.scss'],
  imports: [NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem],
})
export class JustifyContentDropdown {
  public justifyDropdownData = Data.justifyDropdownData;
}

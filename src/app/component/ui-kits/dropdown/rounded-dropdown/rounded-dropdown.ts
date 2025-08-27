import { Component } from '@angular/core';

import {
  NgbDropdown,
  NgbDropdownToggle,
  NgbDropdownMenu,
  NgbDropdownItem,
} from '@ng-bootstrap/ng-bootstrap';

import * as Data from '../../../../shared/data/data/ui-kits/dropdown';

@Component({
  selector: 'app-rounded-dropdown',
  templateUrl: './rounded-dropdown.html',
  styleUrls: ['./rounded-dropdown.scss'],
  imports: [NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem],
})
export class RoundedDropdown {
  public roundedDropdownData = Data.roundedDropdownData;
}

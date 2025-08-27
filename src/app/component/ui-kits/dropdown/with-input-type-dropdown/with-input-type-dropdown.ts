import { Component } from '@angular/core';

import {
  NgbDropdown,
  NgbDropdownToggle,
  NgbDropdownMenu,
  NgbDropdownItem,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-with-input-type-dropdown',
  templateUrl: './with-input-type-dropdown.html',
  styleUrls: ['./with-input-type-dropdown.scss'],
  imports: [NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem],
})
export class WithInputTypeDropdown {}

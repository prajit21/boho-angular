import { Component } from '@angular/core';

import {
  NgbDropdown,
  NgbDropdownToggle,
  NgbDropdownMenu,
  NgbDropdownItem,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dark-dropdown',
  templateUrl: './dark-dropdown.html',
  styleUrls: ['./dark-dropdown.scss'],
  imports: [NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem],
})
export class DarkDropdown {}

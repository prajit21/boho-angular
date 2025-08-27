import { Component } from '@angular/core';

import { NgbDropdown, NgbDropdownToggle, NgbDropdownMenu } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-unique-dropdown',
  templateUrl: './unique-dropdown.html',
  styleUrls: ['./unique-dropdown.scss'],
  imports: [NgbDropdown, NgbDropdownToggle, NgbDropdownMenu],
})
export class UniqueDropdown {}

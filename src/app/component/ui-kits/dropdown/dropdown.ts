import { Component } from '@angular/core';

import { AlignmentDropdown } from './alignment-dropdown/alignment-dropdown';
import { BasicDropdown } from './basic-dropdown/basic-dropdown';
import { DarkDropdown } from './dark-dropdown/dark-dropdown';
import { DividerDropdown } from './divider-dropdown/divider-dropdown';
import { DropdownSizing } from './dropdown-sizing/dropdown-sizing';
import { HeadingDropdown } from './heading-dropdown/heading-dropdown';
import { HelperCardDropdown } from './helper-card-dropdown/helper-card-dropdown';
import { JustifyContentDropdown } from './justify-content-dropdown/justify-content-dropdown';
import { RoundedDropdown } from './rounded-dropdown/rounded-dropdown';
import { SplitDropdown } from './split-dropdown/split-dropdown';
import { UniqueDropdown } from './unique-dropdown/unique-dropdown';
import { WithInputTypeDropdown } from './with-input-type-dropdown/with-input-type-dropdown';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.html',
  styleUrls: ['./dropdown.scss'],
  imports: [
    BasicDropdown,
    RoundedDropdown,
    SplitDropdown,
    HeadingDropdown,
    WithInputTypeDropdown,
    DarkDropdown,
    UniqueDropdown,
    JustifyContentDropdown,
    AlignmentDropdown,
    HelperCardDropdown,
    DividerDropdown,
    DropdownSizing,
  ],
})
export class Dropdown {}

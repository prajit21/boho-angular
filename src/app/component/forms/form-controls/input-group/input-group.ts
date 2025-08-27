import { Component } from '@angular/core';

import { BasicInputGroups } from './basic-input-groups/basic-input-groups';
import { ButtonAddons } from './button-addons/button-addons';
import { ButtonDropdown } from './button-dropdown/button-dropdown';
import { Checkboxradio } from './checkboxradio/checkboxradio';
import { CustomFileInput } from './custom-file-input/custom-file-input';
import { CustomForms } from './custom-forms/custom-forms';
import { MultipleInputs } from './multiple-inputs/multiple-inputs';
import { SegmentedButton } from './segmented-button/segmented-button';
import { Sizing } from './sizing/sizing';
import { VariationAddons } from './variation-addons/variation-addons';

@Component({
  selector: 'app-input-group',
  templateUrl: './input-group.html',
  styleUrls: ['./input-group.scss'],
  imports: [
    ButtonAddons,
    CustomForms,
    CustomFileInput,
    ButtonDropdown,
    SegmentedButton,
    Checkboxradio,
    Sizing,
    MultipleInputs,
    BasicInputGroups,
    VariationAddons,
  ],
})
export class InputGroup {}

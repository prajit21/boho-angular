import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import * as Data from '../../../../../shared/data/data/forms/form-control';

@Component({
  selector: 'app-custome-checkbox',
  templateUrl: './custome-checkbox.html',
  styleUrls: ['./custome-checkbox.scss'],
  imports: [FormsModule],
})
export class CustomeCheckbox {
  public borderedCheckBox = Data.borderedCheckBox;
  public iconCheckBox = Data.iconCheckBox;
  public filledCheckBox = Data.filledCheckBox;
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import * as Data from '../../../../../shared/data/data/forms/form-control';

@Component({
  selector: 'app-variation-checkbox',
  templateUrl: './variation-checkbox.html',
  styleUrls: ['./variation-checkbox.scss'],
  imports: [FormsModule],
})
export class VariationCheckbox {
  public variationCheckbox = Data.variationCheckbox;
  public themeSale = Data.themeSale;
}

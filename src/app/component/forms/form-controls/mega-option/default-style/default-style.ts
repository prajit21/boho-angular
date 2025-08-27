import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import * as Data from '../../../../../shared/data/data/forms/form-control';

@Component({
  selector: 'app-default-style',
  templateUrl: './default-style.html',
  styleUrls: ['./default-style.scss'],
  imports: [FormsModule],
})
export class DefaultStyle {
  public defaultStyleData = Data.defaultStyle;
}

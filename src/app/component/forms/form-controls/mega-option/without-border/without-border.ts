import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import * as Data from '../../../../../shared/data/data/forms/form-control';

@Component({
  selector: 'app-without-border',
  templateUrl: './without-border.html',
  styleUrls: ['./without-border.scss'],
  imports: [FormsModule],
})
export class WithoutBorder {
  public withoutBorderData = Data.withoutBorder;
}

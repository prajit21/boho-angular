import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { verticalStyle } from '../../../../../shared/data/data/forms/form-control';

@Component({
  selector: 'app-verticle-style',
  templateUrl: './verticle-style.html',
  styleUrls: ['./verticle-style.scss'],
  imports: [FormsModule],
})
export class VerticleStyle {
  public verticalStyle = verticalStyle;
}

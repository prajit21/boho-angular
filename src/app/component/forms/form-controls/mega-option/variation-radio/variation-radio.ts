import { Component } from '@angular/core';

import { SvgIconComponent } from 'angular-svg-icon';

import * as Data from '../../../../../shared/data/data/forms/form-control';

@Component({
  selector: 'app-variation-radio',
  templateUrl: './variation-radio.html',
  styleUrls: ['./variation-radio.scss'],
  imports: [SvgIconComponent],
})
export class VariationRadio {
  public variationRadioPayment = Data.variationRadioPaymentData;
  public variationRadioDesign = Data.variationRadioDesign;
  public variationRadioIcon = Data.variationRadioIcon;
}

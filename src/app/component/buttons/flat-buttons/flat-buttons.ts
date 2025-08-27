import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

import * as Data from '../../../shared/data/data/buttons/buttons';

@Component({
  selector: 'app-flat-buttons',
  templateUrl: './flat-buttons.html',
  styleUrls: ['./flat-buttons.scss'],
  imports: [NgbTooltip, TitleCasePipe],
})
export class FlatButtons {
  public flatButtonData = Data.flatButtonData;
  public flatOutlinedButtonsData = Data.flatOutlinedButtonsData;
  public flatGradinButtonData = Data.flatGradienButtonData;
}

import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

import * as Data from '../../../shared/data/data/buttons/buttons';

@Component({
  selector: 'app-default-buttons',
  templateUrl: './default-buttons.html',
  styleUrls: ['./default-buttons.scss'],
  imports: [NgbTooltip, TitleCasePipe],
})
export class DefaultButtons {
  public defaultButtonsData = Data.defaultButtonsData;
  public outlinedButtonsData = Data.outlinedButtonsData;
  public gradientButtonData = Data.gradientButtonData;
}

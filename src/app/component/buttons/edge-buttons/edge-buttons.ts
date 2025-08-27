import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

import * as Data from '../../../shared/data/data/buttons/buttons';

@Component({
  selector: 'app-edge-buttons',
  templateUrl: './edge-buttons.html',
  styleUrls: ['./edge-buttons.scss'],
  imports: [NgbTooltip, TitleCasePipe],
})
export class EdgeButtons {
  public edgeButtonData = Data.edgeButtonData;
  public edgeOutlinedButtonsData = Data.edgeOutlinedButtonsData;
  public edgeGradienButtonData = Data.edgeGradienButtonData;
}

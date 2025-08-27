import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

import * as Data from '../../../shared/data/data/buttons/buttons';

@Component({
  selector: 'app-raised-buttons',
  templateUrl: './raised-buttons.html',
  styleUrls: ['./raised-buttons.scss'],
  imports: [NgbTooltip, TitleCasePipe],
})
export class RaisedButtons {
  public raisedButtonData = Data.raisedButtonData;
  public raisedOutlinedButtonsData = Data.raisedOutlinedButtonsData;
  public raisedGradienButtonData = Data.raisedGradienButtonData;
}

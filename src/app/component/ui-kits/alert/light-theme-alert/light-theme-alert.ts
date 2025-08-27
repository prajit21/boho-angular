import { LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/ui-kits/alert';

@Component({
  selector: 'app-light-theme-alert',
  templateUrl: './light-theme-alert.html',
  styleUrls: ['./light-theme-alert.scss'],
  imports: [LowerCasePipe],
})
export class LightThemeAlert {
  public lightThemeAlertData = Data.lightThemeAlertData;
}

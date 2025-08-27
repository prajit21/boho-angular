import { LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/ui-kits/alert';

@Component({
  selector: 'app-dark-theme-alert',
  templateUrl: './dark-theme-alert.html',
  styleUrls: ['./dark-theme-alert.scss'],
  imports: [LowerCasePipe],
})
export class DarkThemeAlert {
  public darkThemeAlertData = Data.darkThemeAlertData;
}

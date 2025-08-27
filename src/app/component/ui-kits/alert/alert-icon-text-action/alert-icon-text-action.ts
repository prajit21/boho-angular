import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/ui-kits/alert';

@Component({
  selector: 'app-alert-icon-text-action',
  templateUrl: './alert-icon-text-action.html',
  styleUrls: ['./alert-icon-text-action.scss'],
  imports: [],
})
export class AlertIconTextAction {
  public alertIconTextAlertData = Data.alertIconTextAlertData;

  closed(alertData: Data.alertIconTextAlert) {
    this.alertIconTextAlertData.splice(this.alertIconTextAlertData.indexOf(alertData), 1);
  }
}

import { Component } from '@angular/core';

import { FeatherIcons } from '../../../../shared/component/feather-icons/feather-icons';
import * as Data from '../../../../shared/data/data/ui-kits/alert';

@Component({
  selector: 'app-outline-dark-light-alert',
  templateUrl: './outline-dark-light-alert.html',
  styleUrls: ['./outline-dark-light-alert.scss'],
  imports: [FeatherIcons],
})
export class OutlineDarkLightAlert {
  public outLinedAlert = Data.outLinedAlertData;

  closed(alertData: Data.outLinedAlert) {
    this.outLinedAlert.splice(this.outLinedAlert.indexOf(alertData), 1);
  }
}

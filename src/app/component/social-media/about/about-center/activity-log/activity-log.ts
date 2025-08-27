import { Component } from '@angular/core';

import { FeatherIcons } from '../../../../../shared/component/feather-icons/feather-icons';
import * as Data from '../../../../../shared/data/data/social-media/social-media-data';

@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.html',
  styleUrls: ['./activity-log.scss'],
  imports: [FeatherIcons],
})
export class ActivityLog {
  public activityLogData = Data.activityLog;
}

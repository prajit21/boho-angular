import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/bonus-ui/timeline';

@Component({
  selector: 'app-horizontial-timeline',
  templateUrl: './horizontial-timeline.html',
  styleUrls: ['./horizontial-timeline.scss'],
  imports: [],
})
export class HorizontialTimeline {
  public horizontialTimelineData = Data.horizontialTimelineData;
}

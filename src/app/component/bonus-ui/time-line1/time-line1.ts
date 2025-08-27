import { Component } from '@angular/core';

import { BasicTimeline } from './basic-timeline/basic-timeline';
import { HorizontialTimeline } from './horizontial-timeline/horizontial-timeline';
import { HoveringTimeline } from './hovering-timeline/hovering-timeline';
import { Timeline } from './timeline/timeline';
import { VariationTimeline } from './variation-timeline/variation-timeline';

@Component({
  selector: 'app-time-line1',
  templateUrl: './time-line1.html',
  styleUrls: ['./time-line1.scss'],
  imports: [BasicTimeline, HoveringTimeline, VariationTimeline, HorizontialTimeline, Timeline],
})
export class TimeLine1 {}

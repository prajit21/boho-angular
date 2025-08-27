import { Component, inject } from '@angular/core';

import { NgbCalendar, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-widget-calander',
  templateUrl: './widget-calander.html',
  styleUrls: ['./widget-calander.scss'],
  imports: [NgbDatepicker],
})
export class WidgetCalander {
  private calendar = inject(NgbCalendar);

  date: { year: number; month: number };
}

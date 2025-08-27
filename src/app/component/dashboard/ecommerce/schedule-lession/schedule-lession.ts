import { Component, inject } from '@angular/core';

import { NgbDateStruct, NgbCalendar, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-schedule-lession',
  templateUrl: './schedule-lession.html',
  styleUrls: ['./schedule-lession.scss'],
  imports: [NgbDatepicker],
})
export class ScheduleLession {
  private calendar = inject(NgbCalendar);

  model: NgbDateStruct | undefined;
  date: { year: number; month: number } | undefined;
}

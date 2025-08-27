import { Component } from '@angular/core';

import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-default-calendar',
  templateUrl: './default-calendar.html',
  styleUrls: ['./default-calendar.scss'],
  imports: [NgbDatepicker],
})
export class DefaultCalendar {
  public date: { year: number; month: number };
}

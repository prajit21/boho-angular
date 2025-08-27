import { Component } from '@angular/core';

import { DatePicker } from './date-picker/date-picker';
import { DateTimePicker } from './date-time-picker/date-time-picker';
import { DefaultCalendar } from './default-calendar/default-calendar';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.html',
  styleUrls: ['./datepicker.scss'],
  imports: [DefaultCalendar, DatePicker, DateTimePicker],
})
export class Datepicker {}

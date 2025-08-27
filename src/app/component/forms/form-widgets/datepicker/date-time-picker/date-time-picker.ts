import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.html',
  styleUrls: ['./date-time-picker.scss'],
  imports: [FormsModule, OwlDateTimeModule, OwlNativeDateTimeModule],
})
export class DateTimePicker {
  date = new Date();
  time = { hour: 13, minute: 30 };
  meridian = true;

  toggleMeridian() {
    this.meridian = !this.meridian;
  }
}

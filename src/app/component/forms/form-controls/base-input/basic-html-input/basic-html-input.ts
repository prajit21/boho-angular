import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { DateTime } from './date-time/date-time';

@Component({
  selector: 'app-basic-html-input',
  templateUrl: './basic-html-input.html',
  styleUrls: ['./basic-html-input.scss'],
  imports: [FormsModule, DateTime],
})
export class BasicHtmlInput {
  private router = inject(Router);

  submit() {
    this.router.navigate(['form-control/base-input']);
  }
}

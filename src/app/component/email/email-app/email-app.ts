import { Component } from '@angular/core';

import { EmailFilter } from './email-filter/email-filter';
import { EmailUser } from './email-user/email-user';
import { ReadEmail } from './read-email/read-email';

@Component({
  selector: 'app-email-app',
  templateUrl: './email-app.html',
  styleUrls: ['./email-app.scss'],
  imports: [EmailFilter, EmailUser, ReadEmail],
})
export class EmailApp {}

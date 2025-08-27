import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ClickOutsideDirective } from '../../../../shared/directive/outside.directive';

@Component({
  selector: 'app-email-filter',
  templateUrl: './email-filter.html',
  styleUrls: ['./email-filter.scss'],
  imports: [RouterLink, ClickOutsideDirective],
})
export class EmailFilter {
  public isOpen: boolean = false;
}

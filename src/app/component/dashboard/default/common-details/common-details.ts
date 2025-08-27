import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { FeatherIcons } from '../../../../shared/component/feather-icons/feather-icons';
import { commonDetails } from '../../../../shared/data/data/default-dashboard/default-dashboard';
import { ClickOutsideDirective } from '../../../../shared/directive/outside.directive';

@Component({
  selector: 'app-common-details',
  templateUrl: './common-details.html',
  styleUrls: ['./common-details.scss'],
  imports: [CommonModule, FeatherIcons, ClickOutsideDirective],
})
export class CommonDetails {
  readonly data = input<commonDetails>();
  public isOpen = false;

  openMenu(i: number) {
    if (this.data()?.id === i) {
      this.isOpen = !this.isOpen;
    }
  }
}

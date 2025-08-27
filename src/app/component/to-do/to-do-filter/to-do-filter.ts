import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FeatherIcons } from '../../../shared/component/feather-icons/feather-icons';
import { ClickOutsideDirective } from '../../../shared/directive/outside.directive';

@Component({
  selector: 'app-to-do-filter',
  templateUrl: './to-do-filter.html',
  styleUrls: ['./to-do-filter.scss'],
  imports: [FeatherIcons, CommonModule, ClickOutsideDirective],
})
export class ToDoFilter {
  public isOpen: boolean = false;

  openFilter() {
    this.isOpen = !this.isOpen;
  }
}

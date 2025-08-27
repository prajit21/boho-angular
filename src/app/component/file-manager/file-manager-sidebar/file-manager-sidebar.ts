import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FeatherIcons } from '../../../shared/component/feather-icons/feather-icons';
import { ClickOutsideDirective } from '../../../shared/directive/outside.directive';

@Component({
  selector: 'app-file-manager-sidebar',
  templateUrl: './file-manager-sidebar.html',
  styleUrls: ['./file-manager-sidebar.scss'],
  imports: [FeatherIcons, CommonModule, ClickOutsideDirective],
})
export class FileManagerSidebar {
  OpenFilter: boolean = false;

  openFilter() {
    this.OpenFilter = !this.OpenFilter;
  }
}

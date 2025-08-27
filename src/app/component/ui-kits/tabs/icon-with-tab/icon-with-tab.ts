import { Component } from '@angular/core';

import {
  NgbNav,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLinkButton,
  NgbNavLinkBase,
  NgbNavContent,
  NgbNavOutlet,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-icon-with-tab',
  templateUrl: './icon-with-tab.html',
  styleUrls: ['./icon-with-tab.scss'],
  imports: [
    NgbNav,
    NgbNavItem,
    NgbNavItemRole,
    NgbNavLinkButton,
    NgbNavLinkBase,
    NgbNavContent,
    NgbNavOutlet,
  ],
})
export class IconWithTab {
  active = 1;
}

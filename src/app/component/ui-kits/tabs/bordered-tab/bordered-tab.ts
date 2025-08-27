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
  selector: 'app-bordered-tab',
  templateUrl: './bordered-tab.html',
  styleUrls: ['./bordered-tab.scss'],
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
export class BorderedTab {
  active = 2;
}

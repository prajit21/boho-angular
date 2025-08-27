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

import * as Data from '../../../../shared/data/data/ui-kits/tab';

@Component({
  selector: 'app-justify-tab',
  templateUrl: './justify-tab.html',
  styleUrls: ['./justify-tab.scss'],
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
export class JustifyTab {
  active = 2;
  public justifyTabData = Data.justifyTabData;
}

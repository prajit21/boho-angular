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
  selector: 'app-material-style-tab',
  templateUrl: './material-style-tab.html',
  styleUrls: ['./material-style-tab.scss'],
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
export class MaterialStyleTab {
  active = 1;

  public userDetailsData = Data.userDetailsData;
  public descriptionData = Data.descriptionData;
  public reviewData = Data.reviewData;
}

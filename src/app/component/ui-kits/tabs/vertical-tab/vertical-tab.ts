import { Component } from '@angular/core';

import {
  NgbNav,
  NgbNavItem,
  NgbNavLinkButton,
  NgbNavLinkBase,
  NgbNavContent,
  NgbNavOutlet,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vertical-tab',
  templateUrl: './vertical-tab.html',
  styleUrls: ['./vertical-tab.scss'],
  imports: [NgbNav, NgbNavItem, NgbNavLinkButton, NgbNavLinkBase, NgbNavContent, NgbNavOutlet],
})
export class VerticalTab {
  active = 'component';
}

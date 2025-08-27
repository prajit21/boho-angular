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
  selector: 'app-javascript-behavior-list',
  templateUrl: './javascript-behavior-list.html',
  styleUrls: ['./javascript-behavior-list.scss'],
  imports: [NgbNav, NgbNavItem, NgbNavLinkButton, NgbNavLinkBase, NgbNavContent, NgbNavOutlet],
})
export class JavascriptBehaviorList {
  active = 'home';
}

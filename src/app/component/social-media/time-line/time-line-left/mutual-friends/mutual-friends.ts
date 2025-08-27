import { Component } from '@angular/core';

import {
  NgbAccordionDirective,
  NgbAccordionItem,
  NgbAccordionHeader,
  NgbAccordionToggle,
  NgbAccordionButton,
  NgbCollapse,
  NgbAccordionCollapse,
  NgbAccordionBody,
} from '@ng-bootstrap/ng-bootstrap';

import * as Data from '../../../../../shared/data/data/social-media/social-media-data';

@Component({
  selector: 'app-mutual-friends',
  templateUrl: './mutual-friends.html',
  styleUrls: ['./mutual-friends.scss'],
  imports: [
    NgbAccordionDirective,
    NgbAccordionItem,
    NgbAccordionHeader,
    NgbAccordionToggle,
    NgbAccordionButton,
    NgbCollapse,
    NgbAccordionCollapse,
    NgbAccordionBody,
  ],
})
export class MutualFriends {
  public isCollapsed = false;

  public mautalFriendsData = Data.mutualFriendsData;
}

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
  selector: 'app-friends-profile',
  templateUrl: './friends-profile.html',
  styleUrls: ['./friends-profile.scss'],
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
export class FriendsProfile {
  public friednsData = Data.Friends;
}

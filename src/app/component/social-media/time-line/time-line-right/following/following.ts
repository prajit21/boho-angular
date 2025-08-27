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
  selector: 'app-following',
  templateUrl: './following.html',
  styleUrls: ['./following.scss'],
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
export class Following {
  public followingData = Data.Following;
}

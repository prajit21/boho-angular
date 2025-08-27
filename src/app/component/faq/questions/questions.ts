import { Component, inject } from '@angular/core';

import {
  NgbAccordionConfig,
  NgbAccordionDirective,
  NgbAccordionItem,
  NgbAccordionHeader,
  NgbAccordionToggle,
  NgbAccordionButton,
  NgbCollapse,
  NgbAccordionCollapse,
  NgbAccordionBody,
} from '@ng-bootstrap/ng-bootstrap';

import { questionData } from '../../../shared/data/data/faq/faq';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.html',
  styleUrls: ['./questions.scss'],
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
export class Questions {
  public questionData = questionData;

  constructor() {
    const config = inject(NgbAccordionConfig);

    // customize default values of accordions used by this component tree
    config.closeOthers = true;
  }
}

import { Component } from '@angular/core';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import * as Data from '../../../../shared/data/data/ui-kits/accordion';

@Component({
  selector: 'app-simple-accordion',
  templateUrl: './simple-accordion.html',
  styleUrls: ['./simple-accordion.scss'],
  imports: [NgbAccordionModule],
})
export class SimpleAccordion {
  public simpleAccordionData = Data.simpleAccordionData;
}

import { Component } from '@angular/core';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import * as Data from '../../../../shared/data/data/ui-kits/accordion';

@Component({
  selector: 'app-outlined-accordion',
  templateUrl: './outlined-accordion.html',
  styleUrls: ['./outlined-accordion.scss'],
  imports: [NgbAccordionModule],
})
export class OutlinedAccordion {
  public simpleAccordionData = Data.simpleAccordionData;
}

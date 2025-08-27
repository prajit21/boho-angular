import { Component } from '@angular/core';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import * as Data from '../../../../shared/data/data/ui-kits/accordion';

@Component({
  selector: 'app-flush-accordion',
  templateUrl: './flush-accordion.html',
  styleUrls: ['./flush-accordion.scss'],
  imports: [NgbAccordionModule],
})
export class FlushAccordion {
  public flushAccordionData = Data.flushAccordionData;
}

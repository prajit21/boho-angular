import { Component } from '@angular/core';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../../shared/component/feather-icons/feather-icons';
import * as Data from '../../../../shared/data/data/ui-kits/accordion';

@Component({
  selector: 'app-with-icon-accordion',
  templateUrl: './with-icon-accordion.html',
  styleUrls: ['./with-icon-accordion.scss'],
  imports: [NgbAccordionModule, FeatherIcons],
})
export class WithIconAccordion {
  public accordionWithIconData = Data.accordionWithIconData;
}

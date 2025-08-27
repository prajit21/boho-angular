import { Component } from '@angular/core';

import { CollapseAccordion } from './collapse-accordion/collapse-accordion';
import { FlushAccordion } from './flush-accordion/flush-accordion';
import { HorizontialAccordion } from './horizontial-accordion/horizontial-accordion';
import { MultipleCollapseAccordion } from './multiple-collapse-accordion/multiple-collapse-accordion';
import { OutlinedAccordion } from './outlined-accordion/outlined-accordion';
import { SimpleAccordion } from './simple-accordion/simple-accordion';
import { WithIconAccordion } from './with-icon-accordion/with-icon-accordion';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.html',
  styleUrls: ['./accordion.scss'],
  imports: [
    SimpleAccordion,
    FlushAccordion,
    MultipleCollapseAccordion,
    WithIconAccordion,
    OutlinedAccordion,
    HorizontialAccordion,
    CollapseAccordion,
  ],
})
export class Accordion {}

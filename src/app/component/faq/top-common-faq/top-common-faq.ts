import { Component, input } from '@angular/core';

import { FeatherIcons } from '../../../shared/component/feather-icons/feather-icons';
import { faqTopPart } from '../../../shared/data/data/faq/faq';

@Component({
  selector: 'app-top-common-faq',
  templateUrl: './top-common-faq.html',
  styleUrls: ['./top-common-faq.scss'],
  imports: [FeatherIcons],
})
export class TopCommonFaq {
  readonly data = input<faqTopPart[]>();
}

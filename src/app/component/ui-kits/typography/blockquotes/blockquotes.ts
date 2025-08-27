import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/ui-kits/typography';

@Component({
  selector: 'app-blockquotes',
  templateUrl: './blockquotes.html',
  styleUrls: ['./blockquotes.scss'],
  imports: [],
})
export class Blockquotes {
  public blockQuotesData = Data.blockQuotesData;
}

import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/ui-kits/grid';

@Component({
  selector: 'app-horizontial-alignment',
  templateUrl: './horizontial-alignment.html',
  styleUrls: ['./horizontial-alignment.scss'],
  imports: [],
})
export class HorizontialAlignment {
  public horizontialAlinmentData = Data.alignmentData;
}

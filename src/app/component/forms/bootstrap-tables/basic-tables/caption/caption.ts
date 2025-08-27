import { Component } from '@angular/core';

import * as Data from '../../../../../shared/data/data/forms/bootstrap-table';

@Component({
  selector: 'app-caption',
  templateUrl: './caption.html',
  styleUrls: ['./caption.scss'],
  imports: [],
})
export class Caption {
  public captionData = Data.captionData;
}

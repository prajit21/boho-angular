import { Component } from '@angular/core';

import { FeatherIcons } from '../../../../../shared/component/feather-icons/feather-icons';
import * as Data from '../../../../../shared/data/data/forms/bootstrap-table';

@Component({
  selector: 'app-hover-row-horizontial',
  templateUrl: './hover-row-horizontial.html',
  styleUrls: ['./hover-row-horizontial.scss'],
  imports: [FeatherIcons],
})
export class HoverRowHorizontial {
  public hoverRowHorizontialData = Data.hoverableRowHorizontialData;
}

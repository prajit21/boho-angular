import { Component } from '@angular/core';

import { CommonAvatars } from './common-avatars/common-avatars';
import { Group } from './group/group';
import * as Data from '../../../shared/data/data/ui-kits/avtars';

@Component({
  selector: 'app-avtars',
  templateUrl: './avtars.html',
  styleUrls: ['./avtars.scss'],
  imports: [CommonAvatars, Group],
})
export class Avtars {
  public sizingData = Data.sizesAvtarData;
  public statusIndicatorData = Data.statusIndicatorData;
  public shapeData = Data.shapeData;
  public ratioData = Data.ratioData;
}

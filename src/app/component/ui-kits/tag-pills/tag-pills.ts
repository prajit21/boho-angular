import { Component } from '@angular/core';

import { BadgeButton } from './badge-button/badge-button';
import { BadgeHeading } from './badge-heading/badge-heading';
import { CommonTagPills } from './common-tag-pills/common-tag-pills';
import * as Data from '../../../shared/data/data/ui-kits/tag-pills';

@Component({
  selector: 'app-tag-pills',
  templateUrl: './tag-pills.html',
  styleUrls: ['./tag-pills.scss'],
  imports: [CommonTagPills, BadgeHeading, BadgeButton],
})
export class TagPills {
  public commonTagPillsData = Data.commonTagPillsData;
}

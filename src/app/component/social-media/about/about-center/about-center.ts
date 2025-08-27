import { Component } from '@angular/core';

import { ActivityLog } from './activity-log/activity-log';
import { CommonAddFriends } from './common-add-friends/common-add-friends';
import { CommonHobbiesEduction } from './common-hobbies-eduction/common-hobbies-eduction';
import * as Data from '../../../../shared/data/data/social-media/social-media-data';

@Component({
  selector: 'app-about-center',
  templateUrl: './about-center.html',
  styleUrls: ['./about-center.scss'],
  imports: [CommonAddFriends, CommonHobbiesEduction, ActivityLog],
})
export class AboutCenter {
  public addFriendsData = Data.peopleKnowYouData;
  public hobbiesAndInterestData = Data.hobbiedAndInterestData;
  public eductionData = Data.eductionData;
}

import { Component } from '@angular/core';

import { Followers } from './followers/followers';
import { Following } from './following/following';
import { FriendsProfile } from './friends-profile/friends-profile';
import { LatestPhotos } from './latest-photos/latest-photos';
import { ProfileIntro } from './profile-intro/profile-intro';
import * as Data from '../../../../shared/data/data/social-media/social-media-data';

@Component({
  selector: 'app-time-line-right',
  templateUrl: './time-line-right.html',
  styleUrls: ['./time-line-right.scss'],
  imports: [ProfileIntro, Followers, Following, LatestPhotos, FriendsProfile],
})
export class TimeLineRight {
  public friednsData = Data.Friends;
}

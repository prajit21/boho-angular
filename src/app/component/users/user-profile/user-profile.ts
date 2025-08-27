import { Component } from '@angular/core';

import { DoublePost } from './double-post/double-post';
import { Profile } from './profile/profile';
import { SidePost } from './side-post/side-post';
import { SinglePost } from './single-post/single-post';
import * as Data from '../../../shared/data/data/users/post-data';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.html',
  styleUrls: ['./user-profile.scss'],
  imports: [Profile, SinglePost, DoublePost, SidePost],
})
export class UserProfile {
  public singlepost1 = Data.SinglePostData1;
  public singlepost2 = Data.SinglePostData2;
}

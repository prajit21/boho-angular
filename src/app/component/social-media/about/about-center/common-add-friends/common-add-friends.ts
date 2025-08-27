import { Component, input } from '@angular/core';

import { addFriends } from '../../../../../shared/data/data/social-media/social-media-data';

@Component({
  selector: 'app-common-add-friends',
  templateUrl: './common-add-friends.html',
  styleUrls: ['./common-add-friends.scss'],
  imports: [],
})
export class CommonAddFriends {
  readonly data = input<addFriends>();
}

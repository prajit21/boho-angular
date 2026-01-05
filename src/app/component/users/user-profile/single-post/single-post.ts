import { Component, input } from '@angular/core';

import { Singlepost } from '../../../../shared/data/data/users/post-data';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.html',
  styleUrls: ['./single-post.scss'],
  imports: [],
})
export class SinglePost {
  readonly data = input<Singlepost>();
}

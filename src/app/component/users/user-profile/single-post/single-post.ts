import { Component, Input } from '@angular/core';

import { Singlepost } from '../../../../shared/data/data/users/post-data';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.html',
  styleUrls: ['./single-post.scss'],
  imports: [],
})
export class SinglePost {
  @Input() data: Singlepost;
}

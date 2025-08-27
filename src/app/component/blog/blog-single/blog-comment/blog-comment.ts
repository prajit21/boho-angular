import { Component, input } from '@angular/core';

import { comments } from '../../../../shared/data/data/blog/blog-data';

@Component({
  selector: 'app-blog-comment',
  templateUrl: './blog-comment.html',
  styleUrls: ['./blog-comment.scss'],
  imports: [],
})
export class BlogComment {
  readonly data = input<comments[]>();
}

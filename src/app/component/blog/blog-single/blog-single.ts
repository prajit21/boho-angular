import { Component } from '@angular/core';

import { BlogComment } from './blog-comment/blog-comment';
import { commentsData } from '../../../shared/data/data/blog/blog-data';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.html',
  styleUrls: ['./blog-single.scss'],
  imports: [BlogComment],
})
export class BlogSingle {
  public commentsData = commentsData;
}

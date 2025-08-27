import { Component } from '@angular/core';

import { commentsData } from '../../../shared/data/data/learning/learning';
import { BlogComment } from '../../blog/blog-single/blog-comment/blog-comment';
import { LearningFilter } from '../learning-filter/learning-filter';

@Component({
  selector: 'app-detailed-cource',
  templateUrl: './detailed-cource.html',
  styleUrls: ['./detailed-cource.scss'],
  imports: [BlogComment, LearningFilter],
})
export class DetailedCource {
  public commentsData = commentsData;
}

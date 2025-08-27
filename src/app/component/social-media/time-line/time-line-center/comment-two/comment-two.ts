import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import * as Data from '../../../../../shared/data/data/social-media/social-media-data';

@Component({
  selector: 'app-comment-two',
  templateUrl: './comment-two.html',
  styleUrls: ['./comment-two.scss'],
  imports: [CommonModule],
})
export class CommentTwo {
  public commentTwoData = Data.commentTwoData;
}

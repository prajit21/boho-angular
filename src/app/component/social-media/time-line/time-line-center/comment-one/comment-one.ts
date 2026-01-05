import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

import * as Data from '../../../../../shared/data/data/social-media/social-media-data';

@Component({
  selector: 'app-comment-one',
  templateUrl: './comment-one.html',
  styleUrls: ['./comment-one.scss'],
  imports: [NgClass],
})
export class CommentOne {
  public commentOneData = Data.commentOneData;
}

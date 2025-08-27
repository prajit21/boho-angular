import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';

import { blogData } from '../../../shared/data/data/blog/blog-data';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.html',
  styleUrls: ['./blog-details.scss'],
  imports: [SlicePipe],
})
export class BlogDetails {
  public blogData = blogData;
}

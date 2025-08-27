import { Component } from '@angular/core';

import * as newsupdates from '../../../../shared/data/data/ecommerce/news-updates';

@Component({
  selector: 'app-news-updates',
  templateUrl: './news-updates.html',
  styleUrls: ['./news-updates.scss'],
  imports: [],
})
export class NewsUpdates {
  public News_Updates = newsupdates.News_Updates;
}

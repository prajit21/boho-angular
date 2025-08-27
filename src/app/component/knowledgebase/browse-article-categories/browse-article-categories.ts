import { Component } from '@angular/core';

import { FeatherIcons } from '../../../shared/component/feather-icons/feather-icons';
import { browseArticlesData } from '../../../shared/data/data/knowledgebase/knowledgebase';

@Component({
  selector: 'app-browse-article-categories',
  templateUrl: './browse-article-categories.html',
  styleUrls: ['./browse-article-categories.scss'],
  imports: [FeatherIcons],
})
export class BrowseArticleCategories {
  public browseArticlesData = browseArticlesData;
}

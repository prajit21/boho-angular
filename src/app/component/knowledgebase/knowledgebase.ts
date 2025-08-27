import { Component } from '@angular/core';

import { BrowseArticleCategories } from './browse-article-categories/browse-article-categories';
import { KnowledgebaseFooterData } from './knowledgebase-footer-data/knowledgebase-footer-data';
import { KnowledgebaseTopData } from './knowledgebase-top-data/knowledgebase-top-data';

@Component({
  selector: 'app-knowledgebase',
  templateUrl: './knowledgebase.html',
  styleUrls: ['./knowledgebase.scss'],
  imports: [KnowledgebaseTopData, BrowseArticleCategories, KnowledgebaseFooterData],
})
export class Knowledgebase {}

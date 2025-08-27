import { Component } from '@angular/core';

import {
  articlesAndVideosData,
  featuredTutorialData,
} from '../../../shared/data/data/knowledgebase/knowledgebase';
import { FeaturedTutorials } from '../../faq/featured-tutorials/featured-tutorials';
import { LatestArticalVideos } from '../../faq/latest-artical-videos/latest-artical-videos';

@Component({
  selector: 'app-knowledgebase-footer-data',
  templateUrl: './knowledgebase-footer-data.html',
  styleUrls: ['./knowledgebase-footer-data.scss'],
  imports: [FeaturedTutorials, LatestArticalVideos],
})
export class KnowledgebaseFooterData {
  public featuredTutorialData = featuredTutorialData;
  public articlesAndVideosData = articlesAndVideosData;
}

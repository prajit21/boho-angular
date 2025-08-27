import { Component, input } from '@angular/core';

import { FeatherIcons } from '../../../shared/component/feather-icons/feather-icons';
import { articlesAndVideos } from '../../../shared/data/data/faq/faq';

@Component({
  selector: 'app-latest-artical-videos',
  templateUrl: './latest-artical-videos.html',
  styleUrls: ['./latest-artical-videos.scss'],
  imports: [FeatherIcons],
})
export class LatestArticalVideos {
  readonly data = input<articlesAndVideos[]>();
}

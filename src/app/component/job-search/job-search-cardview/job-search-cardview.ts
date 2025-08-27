import { Component, inject } from '@angular/core';

import { NgbRatingConfig, NgbRating } from '@ng-bootstrap/ng-bootstrap';

import { jobCardsData } from '../../../shared/data/data/job-search/job-search';
import { JobFilter } from '../job-filter/job-filter';

@Component({
  selector: 'app-job-search-cardview',
  templateUrl: './job-search-cardview.html',
  styleUrls: ['./job-search-cardview.scss'],
  imports: [JobFilter, NgbRating],
})
export class JobSearchCardview {
  config = inject(NgbRatingConfig);

  public jobCardsData = jobCardsData;

  constructor() {
    const config = this.config;

    config.max = 5;
    config.readonly = true;
  }
}

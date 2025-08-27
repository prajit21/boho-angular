import { SlicePipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { NgbRatingConfig, NgbRating } from '@ng-bootstrap/ng-bootstrap';

import { jobCardsData } from '../../../shared/data/data/job-search/job-search';
import { JobFilter } from '../job-filter/job-filter';

@Component({
  selector: 'app-job-search-listview',
  templateUrl: './job-search-listview.html',
  styleUrls: ['./job-search-listview.scss'],
  imports: [JobFilter, NgbRating, SlicePipe],
})
export class JobSearchListview {
  config = inject(NgbRatingConfig);

  public jobCardsData = jobCardsData;

  constructor() {
    const config = this.config;

    config.max = 5;
    config.readonly = true;
  }
}

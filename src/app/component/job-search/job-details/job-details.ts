import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';

import { NgbRating } from '@ng-bootstrap/ng-bootstrap';

import { jobDetail, jobCardsData } from '../../../shared/data/data/job-search/job-search';
import { JobFilter } from '../job-filter/job-filter';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.html',
  styleUrls: ['./job-details.scss'],
  imports: [JobFilter, NgbRating, SlicePipe],
})
export class JobDetails {
  public jobDetail = jobDetail;
  public jobCardsData = jobCardsData;
}

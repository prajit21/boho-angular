import { Component, inject } from '@angular/core';

import { NgbRatingConfig, NgbCollapse, NgbRating } from '@ng-bootstrap/ng-bootstrap';

import { upcomingCourse } from '../../../../shared/data/data/learning/learning';

@Component({
  selector: 'app-upcoming-cources',
  templateUrl: './upcoming-cources.html',
  styleUrls: ['./upcoming-cources.scss'],
  imports: [NgbCollapse, NgbRating],
})
export class UpcomingCources {
  config = inject(NgbRatingConfig);

  public upcomingCourse = upcomingCourse;

  public isCollapsed = false;

  constructor() {
    const config = this.config;

    config.max = 5;
    config.readonly = true;
  }
}

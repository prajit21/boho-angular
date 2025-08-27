import { Component } from '@angular/core';

import { Categories } from './categories/categories';
import { FindCource } from './find-cource/find-cource';
import { UpcomingCources } from './upcoming-cources/upcoming-cources';
import { findCourse } from '../../../shared/data/data/learning/learning';
import { ClickOutsideDirective } from '../../../shared/directive/outside.directive';

@Component({
  selector: 'app-learning-filter',
  templateUrl: './learning-filter.html',
  styleUrls: ['./learning-filter.scss'],
  imports: [FindCource, Categories, UpcomingCources, ClickOutsideDirective],
})
export class LearningFilter {
  public findCourse = findCourse;

  public isCollapsed: boolean = false;

  openFilter() {
    this.isCollapsed = !this.isCollapsed;
  }
}

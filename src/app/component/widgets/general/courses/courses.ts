import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SvgIconComponent } from 'angular-svg-icon';

import { coursesData } from '../../../../shared/data/data/widgets/widgets-data';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.html',
  styleUrls: ['./courses.scss'],
  imports: [SvgIconComponent, RouterLink],
})
export class Courses {
  public coursesData = coursesData;
}

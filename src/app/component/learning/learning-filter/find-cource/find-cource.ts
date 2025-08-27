import { Component } from '@angular/core';

import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

import { findCourse } from '../../../../shared/data/data/learning/learning';

@Component({
  selector: 'app-find-cource',
  templateUrl: './find-cource.html',
  styleUrls: ['./find-cource.scss'],
  imports: [NgbCollapse],
})
export class FindCource {
  public findCourse = findCourse;

  public isCollapsed = false;
}

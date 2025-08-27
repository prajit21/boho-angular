import { Component } from '@angular/core';

import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

import { Category } from '../../../../shared/data/data/learning/learning';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.html',
  styleUrls: ['./categories.scss'],
  imports: [NgbCollapse],
})
export class Categories {
  public Categories = Category;

  public isCollapsed = false;
}

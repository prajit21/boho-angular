import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FeatherIcons } from '../../../shared/component/feather-icons/feather-icons';
import * as Data from '../../../shared/data/data/project/project-list';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.html',
  styleUrls: ['./project-list.scss'],
  imports: [FeatherIcons, RouterLink, CommonModule],
})
export class ProjectList {
  active = 1;
  public openTab: string = 'All';

  // Data
  public ProjectListData = Data.ProjectList;
  filterData: Data.projectList[] = this.ProjectListData;

  //Filter data
  tabbed(val: string) {
    this.openTab = val;
    this.filterData =
      val !== 'All'
        ? this.ProjectListData.filter((data: Data.projectList) => {
            return data.badge == this.openTab ? true : false;
          })
        : this.ProjectListData;
  }
}

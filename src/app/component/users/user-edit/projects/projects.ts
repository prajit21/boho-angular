import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/users/user-project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
  imports: [],
})
export class Projects {
  public projectData = Data.UserprojectData;
}

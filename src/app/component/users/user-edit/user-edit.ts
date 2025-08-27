import { Component } from '@angular/core';

import { EditProfile } from './edit-profile/edit-profile';
import { MyProfile } from './my-profile/my-profile';
import { Projects } from './projects/projects';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.html',
  styleUrls: ['./user-edit.scss'],
  imports: [MyProfile, EditProfile, Projects],
})
export class UserEdit {}

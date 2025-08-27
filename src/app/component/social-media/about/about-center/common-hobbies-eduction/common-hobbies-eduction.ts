import { Component, input } from '@angular/core';

import { hobbiesEduction } from '../../../../../shared/data/data/social-media/social-media-data';

@Component({
  selector: 'app-common-hobbies-eduction',
  templateUrl: './common-hobbies-eduction.html',
  styleUrls: ['./common-hobbies-eduction.scss'],
  imports: [],
})
export class CommonHobbiesEduction {
  readonly data = input<hobbiesEduction>();
}

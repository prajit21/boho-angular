import { Component } from '@angular/core';

import { Profile } from './profile/profile';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.html',
  styleUrls: ['./social-media.scss'],
  imports: [Profile],
})
export class SocialMedia {}

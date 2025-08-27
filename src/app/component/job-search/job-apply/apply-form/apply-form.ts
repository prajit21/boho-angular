import { Component } from '@angular/core';

import { PersonalDetails } from './personal-details/personal-details';
import { UploadFiles } from './upload-files/upload-files';
import { YourEduction } from './your-eduction/your-eduction';
import { YourExperience } from './your-experience/your-experience';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.html',
  styleUrls: ['./apply-form.scss'],
  imports: [PersonalDetails, YourEduction, YourExperience, UploadFiles],
})
export class ApplyForm {}

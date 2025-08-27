import { Component } from '@angular/core';

import { UploadFile } from './upload-file/upload-file';

@Component({
  selector: 'app-create-new-project',
  templateUrl: './create-new-project.html',
  styleUrls: ['./create-new-project.scss'],
  imports: [UploadFile],
})
export class CreateNewProject {}

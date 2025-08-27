import { Component } from '@angular/core';

import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-default-file-upload',
  templateUrl: './default-file-upload.html',
  styleUrls: ['./default-file-upload.scss'],
  imports: [DropzoneModule],
})
export class DefaultFileUpload {
  public config: DropzoneConfigInterface = {
    url: 'https://httpbin.org/post',
    maxFilesize: 50,
    addRemoveLinks: true,
  };

  onUploadError(_$event: DropzoneConfigInterface) {}
  onUploadSuccess(_$event: DropzoneConfigInterface) {}
}

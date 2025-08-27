import { Component } from '@angular/core';

import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.html',
  styleUrls: ['./image-preview.scss'],
  imports: [DropzoneModule],
})
export class ImagePreview {
  public config: DropzoneConfigInterface = {
    url: 'https://httpbin.org/post',
    maxFilesize: 50,
    addRemoveLinks: true,
    acceptedFiles: 'image/*',
  };

  onUploadError(_$event: DropzoneConfigInterface) {}
  onUploadSuccess(_$event: DropzoneConfigInterface) {}
}

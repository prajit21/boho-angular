import { Component } from '@angular/core';

import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-single-file-upload',
  templateUrl: './single-file-upload.html',
  styleUrls: ['./single-file-upload.scss'],
  imports: [DropzoneModule],
})
export class SingleFileUpload {
  public config: DropzoneConfigInterface = {
    url: 'https://httpbin.org/post',
    maxFilesize: 50,
    addRemoveLinks: true,
  };

  public text =
    '<i class="icon-cloud-up"></i><h4 class="f-w-700">Drop files here or click to upload.</h4><span class="note">(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>';

  onUploadError(_$event: DropzoneConfigInterface) {}
  onUploadSuccess(_$event: DropzoneConfigInterface) {}
}

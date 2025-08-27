import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';
import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';
import { Editor, NgxEditorModule } from 'ngx-editor';

@Component({
  selector: 'app-blog-add-post',
  templateUrl: './blog-add-post.html',
  styleUrls: ['./blog-add-post.scss'],
  imports: [FormsModule, NgSelectModule, NgxEditorModule, DropzoneModule],
})
export class BlogAddPost {
  public text =
    '<i class="icon-cloud-up"></i><h4 class="f-w-700 mb-0">Drop files here or click to upload.</h4>';

  public config: DropzoneConfigInterface = {
    url: 'https://httpbin.org/post',
    maxFilesize: 50,
    addRemoveLinks: true,
  };
  public editor: Editor;
  public html = '';
  public selectedCityIds: string[] = [];
  public cities2 = [
    { id: 1, name: 'LifeStyle' },
    { id: 2, name: 'Travel' },
  ];

  ngOnInit(): void {
    this.editor = new Editor();
  }

  onUploadError(_$event: DropzoneConfigInterface) {}

  onUploadSuccess(_$event: DropzoneConfigInterface) {}

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}

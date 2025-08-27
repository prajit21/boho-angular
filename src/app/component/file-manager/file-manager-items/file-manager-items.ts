import { Component } from '@angular/core';

import * as Data from '../../../shared/data/data/file manager/file-manager-items';

@Component({
  selector: 'app-file-manager-items',
  templateUrl: './file-manager-items.html',
  styleUrls: ['./file-manager-items.scss'],
  imports: [],
})
export class FileManagerItems {
  public quickaccessData = Data.QuickAccessData;
  public folderData = Data.FolderData;
  public filesData = Data.filesData;
}

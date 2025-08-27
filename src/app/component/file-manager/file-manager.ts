import { Component } from '@angular/core';

import { FileManagerItems } from './file-manager-items/file-manager-items';
import { FileManagerSidebar } from './file-manager-sidebar/file-manager-sidebar';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.html',
  styleUrls: ['./file-manager.scss'],
  imports: [FileManagerSidebar, FileManagerItems],
})
export class FileManager {}

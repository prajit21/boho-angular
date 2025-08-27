import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularEditorModule } from '@kolkov/angular-editor';

@Component({
  selector: 'app-mde-editor',
  templateUrl: './mde-editor.html',
  styleUrls: ['./mde-editor.scss'],
  imports: [AngularEditorModule, FormsModule],
})
export class MdeEditor {
  public htmlContent = '';
}

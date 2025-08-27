import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Editor, NgxEditorModule } from 'ngx-editor';

import { EmailFilter } from '../email-app/email-filter/email-filter';
import { EmailUser } from '../email-app/email-user/email-user';

@Component({
  selector: 'app-email-compose',
  templateUrl: './email-compose.html',
  styleUrls: ['./email-compose.scss'],
  imports: [EmailFilter, EmailUser, NgxEditorModule, FormsModule],
})
export class EmailCompose {
  public editor: Editor;
  public html = '';

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}

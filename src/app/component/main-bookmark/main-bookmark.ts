import { Component } from '@angular/core';

import { Sidemenu } from './sidemenu/sidemenu';

@Component({
  selector: 'app-main-bookmark',
  templateUrl: './main-bookmark.html',
  styleUrls: ['./main-bookmark.scss'],
  imports: [Sidemenu],
})
export class MainBookmark {
  public listBookmark: boolean = false;

  changegrid() {
    this.listBookmark = false;
  }
  changelist() {
    this.listBookmark = true;
  }
}

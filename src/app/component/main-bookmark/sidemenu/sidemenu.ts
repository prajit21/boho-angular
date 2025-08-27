import { Component, Output, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { allBookmarkData, tagData } from '../../../shared/data/data/main-bookmark/all-bookmark';
import { ClickOutsideDirective } from '../../../shared/directive/outside.directive';
import { AllBookmark } from '../all-bookmark/all-bookmark';
import { AddTag } from '../modal/add-tag/add-tag';
import { NewBookmark } from '../modal/new-bookmark/new-bookmark';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.html',
  styleUrls: ['./sidemenu.scss'],
  imports: [AllBookmark, ClickOutsideDirective],
})
export class Sidemenu {
  private modalService = inject(NgbModal);

  @(Output()!) selectedheading_id: number;
  @(Output()!) selectegTagId: number;

  public open: boolean = false;
  public allBookmarkData = allBookmarkData;
  public tagData = tagData;

  openMenu() {
    this.open = !this.open;
  }

  openAddBookmark() {
    this.modalService.open(NewBookmark, { size: 'lg' });
  }

  openAddTag() {
    this.modalService.open(AddTag, { size: 'lg' });
  }

  getData(title_id: number) {
    const getHeadingData = this.allBookmarkData.filter(data => {
      return data.title_id === title_id;
    });
    this.selectedheading_id = getHeadingData[0].title_id;
  }

  getTagData(title_id: number) {
    const getHeadingData = this.tagData.filter(data => {
      return data.title_id === title_id;
    });

    this.selectegTagId = getHeadingData[0].title_id;
  }
}

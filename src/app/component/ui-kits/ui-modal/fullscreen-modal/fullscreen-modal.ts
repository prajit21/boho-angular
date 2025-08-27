import { Component, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FullscreenCommonModal } from './fullscreen-common-modal/fullscreen-common-modal';
import { FullscreenContentModal } from './fullscreen-content-modal/fullscreen-content-modal';
import * as Data from '../../../../shared/data/data/ui-kits/ui-modal';

@Component({
  selector: 'app-fullscreen-modal',
  templateUrl: './fullscreen-modal.html',
  styleUrls: ['./fullscreen-modal.scss'],
  imports: [],
})
export class FullscreenModal {
  private modalService = inject(NgbModal);

  public fullscreenModalData = Data.fullscreenModalData;
  public commonFullScreenData = Data.commonFullScreenData;
  public title = '';

  fullscreenModal() {
    this.modalService.open(FullscreenContentModal, { fullscreen: true });
  }

  fullscreenSMModal() {
    this.title = 'Full Screen Below sm';
    const modal = this.modalService.open(FullscreenCommonModal, { size: 'md' });
    modal.componentInstance.title = this.title;
  }

  fullscreenMDModal() {
    this.title = 'Full Screen Below md';
    const modal = this.modalService.open(FullscreenCommonModal, { size: 'md' });
    modal.componentInstance.title = this.title;
  }

  fullscreenLGModal() {
    this.title = 'Full Screen Below lg';
    const modal = this.modalService.open(FullscreenCommonModal, { size: 'lg' });
    modal.componentInstance.title = this.title;
  }

  fullscreenXLModal() {
    this.title = 'Full Screen Below xl';
    const modal = this.modalService.open(FullscreenCommonModal, { size: 'xl' });
    modal.componentInstance.title = this.title;
  }

  fullscreenXXLModal() {
    this.title = 'Full Screen Below xxl';
    const modal = this.modalService.open(FullscreenCommonModal, { size: 'xxl' });
    modal.componentInstance.title = this.title;
  }
}

import { Component, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../../../shared/component/feather-icons/feather-icons';
import { fullscreenModalData } from '../../../../../shared/data/data/ui-kits/ui-modal';

@Component({
  selector: 'app-fullscreen-content-modal',
  templateUrl: './fullscreen-content-modal.html',
  styleUrls: ['./fullscreen-content-modal.scss'],
  imports: [FeatherIcons],
})
export class FullscreenContentModal {
  private modal = inject(NgbModal);

  public fullscreenModalData = fullscreenModalData;

  close() {
    this.modal.dismissAll();
  }
}

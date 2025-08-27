import { Component, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../../../shared/component/feather-icons/feather-icons';
import * as Data from '../../../../../shared/data/data/ui-kits/ui-modal';

@Component({
  selector: 'app-full-screen-modal',
  templateUrl: './full-screen-modal.html',
  styleUrls: ['./full-screen-modal.scss'],
  imports: [FeatherIcons],
})
export class FullScreenModal {
  private modal = inject(NgbModal);

  public modalData = Data.modalData;

  close() {
    this.modal.dismissAll();
  }
}

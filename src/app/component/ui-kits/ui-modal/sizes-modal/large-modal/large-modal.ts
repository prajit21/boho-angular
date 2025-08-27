import { Component, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../../../shared/component/feather-icons/feather-icons';
import * as Data from '../../../../../shared/data/data/ui-kits/ui-modal';

@Component({
  selector: 'app-large-modal',
  templateUrl: './large-modal.html',
  styleUrls: ['./large-modal.scss'],
  imports: [FeatherIcons],
})
export class LargeModal {
  private modal = inject(NgbModal);

  public modalData = Data.modalData;

  close() {
    this.modal.dismissAll();
  }
}

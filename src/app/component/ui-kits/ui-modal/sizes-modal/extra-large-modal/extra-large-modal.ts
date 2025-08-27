import { Component, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../../../shared/component/feather-icons/feather-icons';
import * as Data from '../../../../../shared/data/data/ui-kits/ui-modal';

@Component({
  selector: 'app-extra-large-modal',
  templateUrl: './extra-large-modal.html',
  styleUrls: ['./extra-large-modal.scss'],
  imports: [FeatherIcons],
})
export class ExtraLargeModal {
  private modal = inject(NgbModal);

  public modalData = Data.modalData;

  close() {
    this.modal.dismissAll();
  }
}

import { Component, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../../../shared/component/feather-icons/feather-icons';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.html',
  styleUrls: ['./simple-modal.scss'],
  imports: [FeatherIcons],
})
export class SimpleModal {
  private modal = inject(NgbModal);

  close() {
    this.modal.dismissAll();
  }
}

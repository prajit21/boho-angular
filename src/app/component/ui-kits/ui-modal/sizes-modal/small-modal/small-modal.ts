import { Component, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../../../shared/component/feather-icons/feather-icons';
import * as Data from '../../../../../shared/data/data/ui-kits/ui-modal';

@Component({
  selector: 'app-small-modal',
  templateUrl: './small-modal.html',
  styleUrls: ['./small-modal.scss'],
  imports: [FeatherIcons],
})
export class SmallModal {
  private modal = inject(NgbModal);

  public smallModalData = Data.smallModalData;

  close() {
    this.modal.dismissAll();
  }
}

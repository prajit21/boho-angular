import { Component, inject, input } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../../../shared/component/feather-icons/feather-icons';
import { commonFullScreenData } from '../../../../../shared/data/data/ui-kits/ui-modal';

@Component({
  selector: 'app-fullscreen-common-modal',
  templateUrl: './fullscreen-common-modal.html',
  styleUrls: ['./fullscreen-common-modal.scss'],
  imports: [FeatherIcons],
})
export class FullscreenCommonModal {
  private modal = inject(NgbModal);

  readonly title = input<string>();
  public commonFullScreenData = commonFullScreenData;

  close() {
    this.modal.dismissAll();
  }
}

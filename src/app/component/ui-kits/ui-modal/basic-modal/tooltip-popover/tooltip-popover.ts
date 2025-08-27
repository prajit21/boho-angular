import { Component, inject } from '@angular/core';

import { NgbModal, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tooltip-popover',
  templateUrl: './tooltip-popover.html',
  styleUrls: ['./tooltip-popover.scss'],
  imports: [NgbTooltip],
})
export class TooltipPopover {
  private modal = inject(NgbModal);

  close() {
    this.modal.dismissAll();
  }
}

import { Component, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalBoho } from './modal-boho/modal-boho';
import { ScrollingContent } from './scrolling-content/scrolling-content';
import { SimpleModal } from './simple-modal/simple-modal';
import { TooltipPopover } from './tooltip-popover/tooltip-popover';

@Component({
  selector: 'app-basic-modal',
  templateUrl: './basic-modal.html',
  styleUrls: ['./basic-modal.scss'],
  imports: [],
})
export class BasicModal {
  private modal = inject(NgbModal);

  simpleModal() {
    this.modal.open(SimpleModal);
  }

  scrollingModal() {
    this.modal.open(ScrollingContent);
  }

  tooltipPopoverModal() {
    this.modal.open(TooltipPopover, { centered: true });
  }

  bohoModal() {
    this.modal.open(ModalBoho);
  }
}

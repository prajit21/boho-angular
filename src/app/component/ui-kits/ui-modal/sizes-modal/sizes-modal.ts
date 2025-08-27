import { Component, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ExtraLargeModal } from './extra-large-modal/extra-large-modal';
import { FullScreenModal } from './full-screen-modal/full-screen-modal';
import { LargeModal } from './large-modal/large-modal';
import { SmallModal } from './small-modal/small-modal';

@Component({
  selector: 'app-sizes-modal',
  templateUrl: './sizes-modal.html',
  styleUrls: ['./sizes-modal.scss'],
  imports: [],
})
export class SizesModal {
  private modal = inject(NgbModal);

  fullScreenModal() {
    this.modal.open(FullScreenModal, { fullscreen: true });
  }

  extraLargeModal() {
    this.modal.open(ExtraLargeModal, { size: 'xl' });
  }

  largeModal() {
    this.modal.open(LargeModal, { size: 'lg' });
  }

  smallModal() {
    this.modal.open(SmallModal, { size: 'sm' });
  }
}

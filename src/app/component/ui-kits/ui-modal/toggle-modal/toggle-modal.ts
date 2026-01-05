import { Component, TemplateRef, inject } from '@angular/core';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-toggle-modal',
  templateUrl: './toggle-modal.html',
  styleUrls: ['./toggle-modal.scss'],
  imports: [],
})
export class ToggleModal {
  private modalService = inject(NgbModal);

  public modalRef1: NgbModalRef;

  openFirstModal(firstModalContent: TemplateRef<NgbModal>) {
    this.modalRef1 = this.modalService.open(firstModalContent, {
      centered: true,
    });
  }

  openSecondModal(secondModalContent: TemplateRef<NgbModal>) {
    this.modalService.open(secondModalContent, { centered: true });
    this.modalRef1.dismiss();
  }
}

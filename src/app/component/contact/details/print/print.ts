import { Component, TemplateRef, inject, viewChild } from '@angular/core';

import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxPrintDirective } from 'ngx-print';

import { AllContact } from '../../../../shared/data/data/contacts/all-contact';

@Component({
  selector: 'app-print',
  templateUrl: './print.html',
  styleUrls: ['./print.scss'],
  imports: [NgxPrintDirective],
})
export class Print {
  private modalService = inject(NgbModal);

  public closeResult: string;
  public modalOpen: boolean = false;

  public printData: AllContact;

  readonly printModal = viewChild<TemplateRef<AllContact>>('printModal');

  async openModal(data: AllContact) {
    this.printData = data;
    this.modalOpen = true;
    this.modalService
      .open(this.printModal(), {
        ariaLabelledBy: 'Confirmation-Modal',
        centered: true,
        windowClass: 'modal-lg modal-dialog-centered',
      })
      .result.then(
        result => {
          `Result ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        },
      );
  }

  private getDismissReason(reason: ModalDismissReasons): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

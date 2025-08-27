import { Component, TemplateRef, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {
  Allbookmark,
  bookmarkDataInterface,
} from '../../../../shared/data/data/main-bookmark/all-bookmark';

@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.html',
  styleUrls: ['./edit-bookmark.scss'],
  imports: [FormsModule],
})
export class EditBookmark {
  private modalService = inject(NgbModal);

  public closeResult: string;
  public modalOpen: boolean = false;

  public bookmarkDetails: bookmarkDataInterface[];

  readonly editBookmarkModal = viewChild<TemplateRef<Allbookmark>>('editBookmarkModal');

  async openModal(data: bookmarkDataInterface[]) {
    this.bookmarkDetails = data;
    this.modalOpen = true;
    this.modalService
      .open(this.editBookmarkModal(), {
        ariaLabelledBy: 'EditBookmark-Modal',
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

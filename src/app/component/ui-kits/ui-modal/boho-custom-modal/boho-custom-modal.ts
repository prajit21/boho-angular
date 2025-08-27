import { Component, TemplateRef, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { BalancedModal } from './balanced-modal/balanced-modal';
import { ProfileModal } from './profile-modal/profile-modal';
import { ResultModal } from './result-modal/result-modal';
import * as Data from '../../../../shared/data/data/ui-kits/ui-modal';

@Component({
  selector: 'app-boho-custom-modal',
  templateUrl: './boho-custom-modal.html',
  styleUrls: ['./boho-custom-modal.scss'],
  imports: [ProfileModal, ResultModal, BalancedModal],
})
export class BohoCustomModal {
  private modalService = inject(NgbModal);

  public bohoCustomModalData = Data.bohoCustomModalData;

  openProfileModal(profileContent: TemplateRef<NgbModal>) {
    this.modalService.open(profileContent, { centered: true });
  }

  openResultModal(resultContent: TemplateRef<NgbModal>) {
    this.modalService.open(resultContent, { centered: true });
  }

  openBalancedModal(balancedContent: TemplateRef<NgbModal>) {
    this.modalService.open(balancedContent, { centered: true });
  }
}

import { CommonModule } from '@angular/common';
import { Component, inject, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ColorPicker } from './color-picker/color-picker';
import { QuickOption } from './quick-option/quick-option';
import { Config, LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.html',
  styleUrls: ['./customizer.scss'],
  imports: [CommonModule, QuickOption, ColorPicker],
})
export class Customizer {
  private modalService = inject(NgbModal);
  layoutService = inject(LayoutService);

  Customizer(val: string) {
    this.layoutService.customizer = val;
  }

  openModal(popup: TemplateRef<NgbModal>) {
    this.modalService.open(popup, {
      backdropClass: 'dark-modal',
      centered: true,
    });
  }
  copyText(data: Config) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = JSON.stringify(data);
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}

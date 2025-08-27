import { Component } from '@angular/core';

import { icoIconData } from '../../../shared/data/data/icons/ico-icon';

@Component({
  selector: 'app-ico-icon',
  templateUrl: './ico-icon.html',
  styleUrls: ['./ico-icon.scss'],
  imports: [],
})
export class IcoIcon {
  public icoIconData = icoIconData;
  public detail: boolean = false;
  public icon: string;
  public val: string;

  toggleWithInfo(icon: string) {
    this.detail = true;
    this.icon = icon;
    this.val = '<i class="icofont icofont-' + icon + '"></i>';
  }

  // copy text
  copyText(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = '<i class="icofont icofont-' + val + '"></i>';
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}

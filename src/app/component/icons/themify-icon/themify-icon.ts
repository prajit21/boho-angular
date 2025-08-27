import { Component } from '@angular/core';

import { themifyIconData } from '../../../shared/data/data/icons/themify';

@Component({
  selector: 'app-themify-icon',
  templateUrl: './themify-icon.html',
  styleUrls: ['./themify-icon.scss'],
  imports: [],
})
export class ThemifyIcon {
  public themifyIconData = themifyIconData;
  public detail: boolean = false;
  public icon: string;
  public val: string;

  toggleWithInfo(icon: string) {
    this.detail = true;
    this.icon = icon;
    this.val = '<i class="' + icon + '"></i>';
  }
  copyText(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = '<i class="' + val + '"></i>';
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}

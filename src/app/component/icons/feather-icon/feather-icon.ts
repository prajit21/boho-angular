import { Component } from '@angular/core';

import { FeatherIcons } from '../../../shared/component/feather-icons/feather-icons';
import { featherIconData } from '../../../shared/data/data/icons/feather-icon';

@Component({
  selector: 'app-feather-icon',
  templateUrl: './feather-icon.html',
  styleUrls: ['./feather-icon.scss'],
  imports: [FeatherIcons],
})
export class FeatherIcon {
  public featherIconData = featherIconData;
  public detail: boolean = false;
  public flag: string;
  public val: string;
  public icon: string;

  constructor() {}

  toggleWithInfo(icon: string) {
    this.detail = true;
    this.icon = icon;
    this.val = '<app-feather-icon [icon]="' + icon + '"></app-feather-icon>';
  }
  copyText(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = '<app-feather-icon [icon]="' + val + '"></app-feather-icon>>';
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}

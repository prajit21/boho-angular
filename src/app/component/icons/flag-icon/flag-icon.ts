import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import * as Data from '../../../shared/data/data/icons/flag-icon';

@Component({
  selector: 'app-flag-icon',
  templateUrl: './flag-icon.html',
  styleUrls: ['./flag-icon.scss'],
  imports: [UpperCasePipe, CommonModule],
})
export class FlagIcon {
  toastrService = inject(ToastrService);

  public flagIconData = Data.flagIconData;
  public detail: boolean = false;
  public flag: string;
  public val: string;
  public bottomRightShow: boolean = false;

  toggleWithInfo(icon: string) {
    this.detail = true;
    this.flag = icon;
    this.val = '<i class="flag-icon flag-icon-' + icon + '"></i>';
  }

  copyText(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = '<i class="flag-icon flag-icon-' + val + '"></i>';
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.bottomRightShow = true;
  }

  topBottomClose() {
    this.bottomRightShow = false;
  }
}

import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-live-toast',
  templateUrl: './live-toast.html',
  styleUrls: ['./live-toast.scss'],
  imports: [CommonModule],
})
export class LiveToast {
  private toastr = inject(ToastrService);

  public topRightShow: boolean = false;
  public bottomRightShow: boolean = false;
  public topLeftShow: boolean = false;
  public bottomLeftShow: boolean = false;

  topRight() {
    this.topRightShow = true;
  }

  topRightClose() {
    this.topRightShow = false;
  }

  bottomRight() {
    this.bottomRightShow = true;
  }

  topBottomClose() {
    this.bottomRightShow = false;
  }

  topLeft() {
    this.topLeftShow = true;
  }

  topLeftClose() {
    this.topLeftShow = false;
  }

  bottomLeft() {
    this.bottomLeftShow = true;
  }

  bottomLeftClose() {
    this.bottomLeftShow = false;
  }
}

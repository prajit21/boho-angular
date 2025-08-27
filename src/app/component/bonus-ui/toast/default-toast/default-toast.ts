import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-default-toast',
  templateUrl: './default-toast.html',
  styleUrls: ['./default-toast.scss'],
  imports: [CommonModule],
})
export class DefaultToast {
  public isShow: boolean = true;

  close() {
    this.isShow = false;
  }
}

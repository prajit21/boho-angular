import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-unique-toast',
  templateUrl: './unique-toast.html',
  styleUrls: ['./unique-toast.scss'],
  imports: [CommonModule],
})
export class UniqueToast {
  public isShow: boolean = true;

  close() {
    this.isShow = false;
  }
}

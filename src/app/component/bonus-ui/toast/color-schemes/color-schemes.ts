import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-color-schemes',
  templateUrl: './color-schemes.html',
  styleUrls: ['./color-schemes.scss'],
  imports: [CommonModule],
})
export class ColorSchemes {
  public isShow: boolean = false;
  close() {
    this.isShow = true;
  }
}

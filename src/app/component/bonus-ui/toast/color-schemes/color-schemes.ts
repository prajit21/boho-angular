import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-color-schemes',
  templateUrl: './color-schemes.html',
  styleUrls: ['./color-schemes.scss'],
  imports: [NgClass],
})
export class ColorSchemes {
  public isShow: boolean = false;
  close() {
    this.isShow = true;
  }
}

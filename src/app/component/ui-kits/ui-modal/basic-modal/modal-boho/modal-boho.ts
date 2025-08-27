import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-boho',
  templateUrl: './modal-boho.html',
  styleUrls: ['./modal-boho.scss'],
  imports: [CommonModule],
})
export class ModalBoho {
  validate: boolean = false;

  public submit() {
    this.validate = !this.validate;
  }
}

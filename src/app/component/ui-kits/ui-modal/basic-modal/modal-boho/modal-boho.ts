import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-boho',
  templateUrl: './modal-boho.html',
  styleUrls: ['./modal-boho.scss'],
})
export class ModalBoho {
  validate: boolean = false;

  public submit() {
    this.validate = !this.validate;
  }
}

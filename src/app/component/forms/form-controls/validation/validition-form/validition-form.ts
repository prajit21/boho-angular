import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-validition-form',
  templateUrl: './validition-form.html',
  styleUrls: ['./validition-form.scss'],
  imports: [FormsModule, CommonModule],
})
export class ValiditionForm {
  public validate = false;

  public submit() {
    this.validate = !this.validate;
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tooltip-form',
  templateUrl: './tooltip-form.html',
  styleUrls: ['./tooltip-form.scss'],
  imports: [FormsModule, CommonModule],
})
export class TooltipForm {
  public validate = false;

  public submit() {
    this.validate = !this.validate;
  }
}

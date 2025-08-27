import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-floating-input',
  templateUrl: './basic-floating-input.html',
  styleUrls: ['./basic-floating-input.scss'],
  imports: [FormsModule],
})
export class BasicFloatingInput {
  public validate = false;

  public submit() {
    this.validate = !this.validate;
  }
}

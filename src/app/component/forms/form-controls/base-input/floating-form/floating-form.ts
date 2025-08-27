import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-floating-form',
  templateUrl: './floating-form.html',
  styleUrls: ['./floating-form.scss'],
  imports: [FormsModule],
})
export class Floatim {
  private router = inject(Router);

  submit() {
    this.router.navigate(['/form-control/base-input']);
  }
}

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.html',
  styleUrls: ['./basic-form.scss'],
  imports: [FormsModule],
})
export class BasicForm {
  private router = inject(Router);

  submit() {
    this.router.navigate(['/form-control/base-input']);
  }
}

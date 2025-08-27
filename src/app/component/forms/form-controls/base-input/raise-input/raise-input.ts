import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-raise-input',
  templateUrl: './raise-input.html',
  styleUrls: ['./raise-input.scss'],
  imports: [FormsModule],
})
export class RaiseInput {
  private router = inject(Router);

  submit() {
    this.router.navigate(['form-control/base-input']);
  }
}

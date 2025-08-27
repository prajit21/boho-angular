import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edge-input',
  templateUrl: './edge-input.html',
  styleUrls: ['./edge-input.scss'],
  imports: [FormsModule],
})
export class EdgeInput {
  private router = inject(Router);

  submit() {
    this.router.navigate(['/form-control/base-input']);
  }
}

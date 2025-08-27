import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss'],
  imports: [RouterLink],
})
export class Profile {
  private router = inject(Router);

  logOut() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }
}

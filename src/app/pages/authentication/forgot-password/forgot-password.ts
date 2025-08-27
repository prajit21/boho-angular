import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.html',
  styleUrls: ['./forgot-password.scss'],
  imports: [RouterLink],
})
export class ForgotPassword {
  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
}

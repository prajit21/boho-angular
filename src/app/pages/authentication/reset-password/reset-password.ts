import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.html',
  styleUrls: ['./reset-password.scss'],
  imports: [RouterLink],
})
export class ResetPassword {
  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
}

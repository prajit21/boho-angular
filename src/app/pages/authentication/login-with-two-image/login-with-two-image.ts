import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CommonLoginForm } from '../common-login-form/common-login-form';

@Component({
  selector: 'app-login-with-two-image',
  templateUrl: './login-with-two-image.html',
  styleUrls: ['./login-with-two-image.scss'],
  imports: [RouterLink, CommonLoginForm],
})
export class LoginWithTwoImage {
  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
}

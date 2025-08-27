import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CommonLoginForm } from '../common-login-form/common-login-form';

@Component({
  selector: 'app-login-bg-image',
  templateUrl: './login-bg-image.html',
  styleUrls: ['./login-bg-image.scss'],
  imports: [RouterLink, CommonLoginForm],
})
export class LoginBgImage {}

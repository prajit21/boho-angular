import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CommonLoginForm } from '../common-login-form/common-login-form';

@Component({
  selector: 'app-login-validation',
  templateUrl: './login-validation.html',
  styleUrls: ['./login-validation.scss'],
  imports: [RouterLink, CommonLoginForm],
})
export class LoginValidation {}

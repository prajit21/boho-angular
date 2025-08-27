import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CommonRegisterForm } from '../common-register-form/common-register-form';

@Component({
  selector: 'app-register-with-two-image',
  templateUrl: './register-with-two-image.html',
  styleUrls: ['./register-with-two-image.scss'],
  imports: [RouterLink, CommonRegisterForm],
})
export class RegisterWithTwoImage {}

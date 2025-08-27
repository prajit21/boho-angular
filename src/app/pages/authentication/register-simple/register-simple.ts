import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CommonRegisterForm } from '../common-register-form/common-register-form';

@Component({
  selector: 'app-register-simple',
  templateUrl: './register-simple.html',
  styleUrls: ['./register-simple.scss'],
  imports: [RouterLink, CommonRegisterForm],
})
export class RegisterSimple {}

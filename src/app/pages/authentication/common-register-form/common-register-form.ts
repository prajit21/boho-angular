import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FeatherIcons } from '../../../shared/component/feather-icons/feather-icons';

@Component({
  selector: 'app-common-register-form',
  templateUrl: './common-register-form.html',
  styleUrls: ['./common-register-form.scss'],
  imports: [RouterLink, FeatherIcons],
})
export class CommonRegisterForm {
  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
}

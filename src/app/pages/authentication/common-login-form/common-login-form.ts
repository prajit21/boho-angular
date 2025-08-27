import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FeatherIcons } from '../../../shared/component/feather-icons/feather-icons';

@Component({
  selector: 'app-common-login-form',
  templateUrl: './common-login-form.html',
  styleUrls: ['./common-login-form.scss'],
  imports: [RouterLink, FeatherIcons],
})
export class CommonLoginForm {
  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
}

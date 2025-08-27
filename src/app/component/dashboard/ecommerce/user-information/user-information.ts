import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FeatherIcons } from '../../../../shared/component/feather-icons/feather-icons';
import * as userinformation from '../../../../shared/data/data/ecommerce/user-information';
import { userInformation } from '../../../../shared/data/data/ecommerce/user-information';
import { ClickOutsideDirective } from '../../../../shared/directive/outside.directive';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.html',
  styleUrls: ['./user-information.scss'],
  imports: [RouterLink, FeatherIcons, ClickOutsideDirective],
})
export class UserInformation {
  public userinformationData = userinformation.UserInformationData;
  public isOpen: boolean = false;
  public openId: number;

  public open: boolean = false;

  toggle() {
    this.open = !this.open;
  }

  openMenu(id: number) {
    this.userinformationData.filter(data => {
      if (data.id === id) {
        this.openId = id;
        this.isOpen = !this.isOpen;
      }
    });
  }

  deleteData(data: userInformation) {
    const index = this.userinformationData.indexOf(data);
    if (index > -1) {
      this.userinformationData.splice(index, 1);
    }
  }
}

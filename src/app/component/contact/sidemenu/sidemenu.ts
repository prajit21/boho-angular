import { Component, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../shared/component/feather-icons/feather-icons';
import * as Data from '../../../shared/data/data/sidemenu';
import { ClickOutsideDirective } from '../../../shared/directive/outside.directive';
import { AddCategory } from '../modal/add-category/add-category';
import { NewContact } from '../modal/new-contact/new-contact';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.html',
  styleUrls: ['./sidemenu.scss'],
  imports: [FeatherIcons, ClickOutsideDirective],
})
export class Sidemenu {
  private modalService = inject(NgbModal);

  public contactSidemenu = Data.ContactSidemenu;
  public open: boolean = false;

  openMenu() {
    this.open = !this.open;
  }

  openNewContact() {
    this.modalService.open(NewContact, { size: 'lg' });
  }

  openAddTag() {
    this.modalService.open(AddCategory);
  }
}

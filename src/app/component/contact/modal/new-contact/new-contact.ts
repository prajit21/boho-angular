import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AllcontactData } from '../../../../shared/data/data/contacts/all-contact';

export interface AddContactForm {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  img: string;
}

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.html',
  styleUrls: ['./new-contact.scss'],
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
})
export class NewContact {
  activeModal = inject(NgbActiveModal);

  public validate = false;
  public allcontactData = AllcontactData;
  public data: AddContactForm;

  myForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('', [Validators.email, Validators.required]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    img: new FormControl('assets/images/user/2.png'),
  });

  // Correctly type the data when reading the value
  add() {
    const data: AddContactForm = this.myForm.value as AddContactForm;
    this.allcontactData.push({
      ...data,
      id: this.allcontactData.length + 1,
      status: true,
      gender: '',
      dob: '',
      personality: '',
      city: '',
      website: '',
      interest: '',
    });
    this.activeModal.dismiss();
  }
  public submit() {
    this.validate = !this.validate;
  }

  get firstName() {
    return this.myForm.get('firstName');
  }

  get lastName() {
    return this.myForm.get('lastName');
  }

  get email() {
    return this.myForm.get('email');
  }

  get mobile() {
    return this.myForm.get('mobile');
  }
}

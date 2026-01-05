import { NgClass } from '@angular/common';
import { Component, OnInit, Output, SimpleChanges, inject, input, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

import { AddressDetails } from './edit-form/address-details/address-details';
import { General } from './edit-form/general/general';
import { PersonalDetails } from './edit-form/personal-details/personal-details';
import { Print } from './print/print';
import * as Data from '../../../shared/data/data/contacts/all-contact';

@Component({
  selector: 'app-details',
  templateUrl: './details.html',
  styleUrls: ['./details.scss'],
  imports: [FormsModule, General, PersonalDetails, AddressDetails, Print, NgClass],
})
export class Details implements OnInit {
  private modalService = inject(NgbModal);

  public editContact: boolean = false;
  public editMoreDetails: boolean = false;
  public open: boolean = false;

  readonly selectedId = input<number>();
  readonly selectedStatus = input<boolean>();
  @Output() selectedData: Data.AllContact;
  @Output() printData: Data.AllContact[];

  public allcontactData = Data.AllcontactData;
  readonly PrintModal = viewChild<Print>('printModal');

  ngOnInit(): void {
    this.allcontactData.map(data => {
      if (data.status) {
        this.selectedData = data;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    let id = changes['selectedId']?.currentValue;
    this.allcontactData.map(data => {
      if (data.id === id) {
        this.selectedData = data;
      }
    });
  }

  editMoreDetail() {
    const myElement = document.getElementById('edit-information') as HTMLElement;
    myElement.style.color = 'white';
  }

  editMoreDetail1() {
    const myElement1 = document.getElementById('edit-information') as HTMLElement;
    myElement1.style.color = '#33BFBF';
  }

  deleteContact() {
    Swal.fire({
      text: 'This contact will be deleted from your Personal Contacts and from the chat list too.',
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#EFEFEE !important',
      confirmButtonColor: 'var(--theme-default)',
    }).then((result: { isConfirmed: boolean; isDenied: boolean }) => {
      if (result.isConfirmed) {
      } else {
        Swal.fire('', 'Your contact is safe!');
      }
    });
  }

  openHistory() {
    this.open = !this.open;
  }
}

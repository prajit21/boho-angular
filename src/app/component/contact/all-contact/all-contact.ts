import { CommonModule } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';

import * as Data from '../../../shared/data/data/contacts/all-contact';
import { Details } from '../details/details';

@Component({
  selector: 'app-all-contact',
  templateUrl: './all-contact.html',
  styleUrls: ['./all-contact.scss'],
  imports: [Details, CommonModule],
})
export class AllContact implements OnInit {
  public allcontactData = Data.AllcontactData;

  @Output() selectedId: number;
  @Output() selectedStatus: boolean;

  ngOnInit(): void {
    const getstatus = this.allcontactData.filter(data => {
      return data.status === true;
    });
    const getstatusData = getstatus[0];
    this.selectedStatus = getstatusData.status;
  }

  getData(id: number, data: Data.AllContact) {
    const getselectedData = this.allcontactData.filter(data => {
      return data.id === id;
    });

    const selectedata = getselectedData[0];
    this.selectedId = selectedata.id;

    if (!data.status) {
      this.allcontactData.forEach((a: Data.AllContact) => {
        if (this.allcontactData.includes(data)) {
          a.status = false;
        }
      });
    }
    data.status = !data.status;
  }
}

import { Component } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-question-alert',
  templateUrl: './question-alert.html',
  styleUrls: ['./question-alert.scss'],
  imports: [],
})
export class QuestionAlert {
  questionALert() {
    Swal.fire({
      text: 'Are you sure you want to do this?',
      showCancelButton: true,
      confirmButtonText: 'Aww yiss!',
      cancelButtonText: 'Oh  noez!',
      confirmButtonColor: 'var(--theme-default)',
      customClass: {
        confirmButton: 'order-2',
        cancelButton: 'order-1',
      },
    });
  }
}

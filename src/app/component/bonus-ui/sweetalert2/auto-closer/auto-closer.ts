import { Component } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-auto-closer',
  templateUrl: './auto-closer.html',
  styleUrls: ['./auto-closer.scss'],
  imports: [],
})
export class AutoCloser {
  timerAlert() {
    Swal.fire({
      title: 'Auto close alert!',
      text: 'just a wait! I will close in 30 second!',
      timer: 3000,
      showConfirmButton: false,
      background: 'rgba(49, 50, 45, 0.2)',
    });
  }
}

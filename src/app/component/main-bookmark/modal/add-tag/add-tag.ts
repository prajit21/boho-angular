import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.html',
  styleUrls: ['./add-tag.scss'],
  imports: [FormsModule],
})
export class AddTag {
  activeModal = inject(NgbActiveModal);
}

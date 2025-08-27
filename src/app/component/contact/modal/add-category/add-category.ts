import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.html',
  styleUrls: ['./add-category.scss'],
  imports: [FormsModule],
})
export class AddCategory {
  activeModal = inject(NgbActiveModal);
}

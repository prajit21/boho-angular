import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AllContact } from '../../../../../shared/data/data/contacts/all-contact';

@Component({
  selector: 'app-general',
  templateUrl: './general.html',
  styleUrls: ['./general.scss'],
  imports: [FormsModule],
})
export class General {
  readonly selectedData = input<AllContact>();
}

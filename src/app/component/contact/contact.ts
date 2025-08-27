import { Component } from '@angular/core';

import { AllContact } from './all-contact/all-contact';
import { Sidemenu } from './sidemenu/sidemenu';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
  imports: [Sidemenu, AllContact],
})
export class Contact {}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { NavService } from '../../../../shared/services/nav.service';
import { VerticalNavService } from '../../../../shared/services/vertical-nav.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.html',
  styleUrls: ['./logo.scss'],
  imports: [],
  imports: [RouterLink, FormsModule],
})
export class Logo {
  constructor(
    public navService: VerticalNavService,
    public navServices: NavService,
  ) {}

  openMenu() {
    this.navService.isDisplay = !this.navService.isDisplay;
  }
}

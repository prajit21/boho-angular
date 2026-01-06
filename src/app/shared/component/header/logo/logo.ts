import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { NavService } from '../../../../shared/services/nav.service';
import { VerticalNavService } from '../../../../shared/services/vertical-nav.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.html',
  styleUrls: ['./logo.scss'],
  imports: [RouterLink, FormsModule],
})
export class Logo {
  readonly navService = inject(VerticalNavService);
  readonly navServices = inject(NavService);

  openMenu() {
    this.navService.isDisplay = !this.navService.isDisplay;
  }
}

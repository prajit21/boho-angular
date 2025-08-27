import { Component, inject } from '@angular/core';

import { VerticalNavService } from '../../services/vertical-nav.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
  imports: [],
})
export class Footer {
  navService = inject(VerticalNavService);

  public footerLight = false;
  public footerDark = false;
  public footerFix = false;
  public year = new Date().getFullYear();

  ngDoCheck() {
    if (window.location.pathname == '/page-layout/footer-dark') {
      this.footerDark = true;
      this.footerLight = false;
      this.footerFix = false;
    } else if (window.location.pathname == '/page-layout/footer-light') {
      this.footerLight = true;
      this.footerDark = false;
      this.footerFix = false;
    } else if (window.location.pathname == '/page-layout/footer-fixed') {
      this.footerFix = true;
      this.footerLight = false;
      this.footerDark = false;
    }
  }
}

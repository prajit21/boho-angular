import { Component } from '@angular/core';

@Component({
  selector: 'app-multiple-collapse-accordion',
  templateUrl: './multiple-collapse-accordion.html',
  styleUrls: ['./multiple-collapse-accordion.scss'],
  imports: [],
})
export class MultipleCollapseAccordion {
  show: boolean = false;
  show2: boolean = false;

  openFirst() {
    this.show = !this.show;
  }

  openSecond() {
    this.show2 = !this.show2;
  }

  toggleBoth() {
    this.show = !this.show;
    this.show2 = !this.show2;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.html',
  styleUrls: ['./child.scss'],
  imports: [],
})
export class Child {
  closed() {
    alert('jn');
  }
}

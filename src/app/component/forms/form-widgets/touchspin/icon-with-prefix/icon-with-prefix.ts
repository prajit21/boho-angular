import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-with-prefix',
  templateUrl: './icon-with-prefix.html',
  styleUrls: ['./icon-with-prefix.scss'],
  imports: [],
})
export class IconWithPrefix {
  public value: number[] = [0, 0];

  decrement(i: number) {
    if (i === 0 || i === 1) {
      if (this.value[i] > 1) {
        this.value[i] -= 1;
      }
    }
  }
  Increment(i: number) {
    {
      if (i === 0 || i === 1) {
        this.value[i] += 1;
      }
    }
  }
}

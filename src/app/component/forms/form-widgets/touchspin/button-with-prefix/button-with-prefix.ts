import { Component } from '@angular/core';

@Component({
  selector: 'app-button-with-prefix',
  templateUrl: './button-with-prefix.html',
  styleUrls: ['./button-with-prefix.scss'],
  imports: [],
})
export class ButtonWithPrefix {
  public value: number[] = [0, 0];

  decrement(i: number) {
    if (i === 0 || i === 1) {
      if (this.value[i] > 0) {
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

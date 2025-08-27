import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction, debounceTime, map } from 'rxjs';

import * as Data from '../../../../../shared/data/data/forms/form-widgets';

@Component({
  selector: 'app-select-on-exact',
  templateUrl: './select-on-exact.html',
  styleUrls: ['./select-on-exact.scss'],
  imports: [FormsModule, NgbTypeahead],
})
export class SelectOnExact {
  public searchData = Data.statesData;

  search: OperatorFunction<string, readonly { name: string }[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term =>
        term === ''
          ? []
          : this.searchData
              .filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, 10),
      ),
    );

  formatter = (x: { name: string }) => x.name;
}

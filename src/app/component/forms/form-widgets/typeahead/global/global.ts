import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbTypeahead, NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable, debounceTime, distinctUntilChanged, map } from 'rxjs';

import * as Data from '../../../../../shared/data/data/forms/form-widgets';

@Component({
  selector: 'app-global',
  templateUrl: './global.html',
  styleUrls: ['./global.scss'],
  imports: [FormsModule, NgbTypeahead],
})
export class Global {
  public searchData = Data.state;

  constructor() {
    const config = inject(NgbTypeaheadConfig);

    // customize default values of typeaheads used by this component tree
    config.showHint = true;
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term =>
        term.length < 2
          ? []
          : this.searchData
              .filter(v => v.toLowerCase().startsWith(term.toLocaleLowerCase()))
              .splice(0, 10),
      ),
    );
}

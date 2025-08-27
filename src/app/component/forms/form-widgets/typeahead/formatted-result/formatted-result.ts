import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction, debounceTime, distinctUntilChanged, map } from 'rxjs';

import * as Data from '../../../../../shared/data/data/forms/form-widgets';

@Component({
  selector: 'app-formatted-result',
  templateUrl: './formatted-result.html',
  styleUrls: ['./formatted-result.scss'],
  imports: [FormsModule, NgbTypeahead],
})
export class FormattedResult {
  public searchData = Data.state;

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term =>
        term === ''
          ? []
          : this.searchData
              .filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, 10),
      ),
    );
}

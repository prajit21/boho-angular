import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import {
  Observable,
  OperatorFunction,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from 'rxjs';

import * as Data from '../../../../../shared/data/data/forms/form-widgets';

@Component({
  selector: 'app-prevent-manual-entry',
  templateUrl: './prevent-manual-entry.html',
  styleUrls: ['./prevent-manual-entry.scss'],
  imports: [FormsModule, NgbTypeahead],
})
export class PreventManualEntry {
  public searchData = Data.statesData;

  formatter = (state: Data.statedDataInterface) => state.name;

  search: OperatorFunction<string, readonly { id: number; name: string }[]> = (
    text$: Observable<string>,
  ) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      filter(term => term.length >= 2),
      map(term =>
        this.searchData.filter(state => new RegExp(term, 'mi').test(state.name)).slice(0, 10),
      ),
    );
}

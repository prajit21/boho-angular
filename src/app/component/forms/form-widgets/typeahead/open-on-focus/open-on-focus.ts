import { Component, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import {
  Observable,
  OperatorFunction,
  Subject,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  merge,
} from 'rxjs';

import * as Data from '../../../../../shared/data/data/forms/form-widgets';

@Component({
  selector: 'app-open-on-focus',
  templateUrl: './open-on-focus.html',
  styleUrls: ['./open-on-focus.scss'],
  imports: [FormsModule, NgbTypeahead],
})
export class OpenOnFocus {
  public searchData = Data.state;

  readonly instance = viewChild<NgbTypeahead>('instance');
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clickWithClosedPopup$ = this.click$.pipe(filter(() => this.instance()!.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clickWithClosedPopup$).pipe(
      map(term =>
        (term === ''
          ? this.searchData
          : this.searchData.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
        ).slice(0, 10),
      ),
    );
  };
}

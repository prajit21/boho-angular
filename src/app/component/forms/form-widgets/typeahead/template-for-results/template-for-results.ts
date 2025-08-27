import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbHighlight, NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction, debounceTime, map } from 'rxjs';

import * as Data from '../../../../../shared/data/data/forms/form-widgets';

@Component({
  selector: 'app-template-for-results',
  templateUrl: './template-for-results.html',
  styleUrls: ['./template-for-results.scss'],
  imports: [NgbHighlight, FormsModule, NgbTypeahead],
})
export class TemplateForResults {
  public flagData = Data.statesWithFlags;

  search: OperatorFunction<string, readonly { name: string; flag: string }[]> = (
    text$: Observable<string>,
  ) =>
    text$.pipe(
      debounceTime(200),
      map(term =>
        term === ''
          ? []
          : this.flagData
              .filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, 10),
      ),
    );

  formatter = (x: { name: string }) => x.name;
}

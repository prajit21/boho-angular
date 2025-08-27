import { Component } from '@angular/core';

import { FormattedResult } from './formatted-result/formatted-result';
import { Global } from './global/global';
import { OpenOnFocus } from './open-on-focus/open-on-focus';
import { PreventManualEntry } from './prevent-manual-entry/prevent-manual-entry';
import { SelectOnExact } from './select-on-exact/select-on-exact';
import { SimpleTypeahead } from './simple-typeahead/simple-typeahead';
import { TemplateForResults } from './template-for-results/template-for-results';
import { WikipediaSearch } from './wikipedia-search/wikipedia-search';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.html',
  styleUrls: ['./typeahead.scss'],
  imports: [
    SimpleTypeahead,
    OpenOnFocus,
    FormattedResult,
    SelectOnExact,
    WikipediaSearch,
    TemplateForResults,
    PreventManualEntry,
    Global,
  ],
})
export class Typeahead {}

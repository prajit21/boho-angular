import { Component } from '@angular/core';

import { ActiveList } from './active-list/active-list';
import { CheckboxList } from './checkbox-list/checkbox-list';
import { ContextualClassesList } from './contextual-classes-list/contextual-classes-list';
import { CustomContentList } from './custom-content-list/custom-content-list';
import { DefaultList } from './default-list/default-list';
import { DisabledList } from './disabled-list/disabled-list';
import { FlushList } from './flush-list/flush-list';
import { HorizontialList } from './horizontial-list/horizontial-list';
import { JavascriptBehaviorList } from './javascript-behavior-list/javascript-behavior-list';
import { NumberBadgeList } from './number-badge-list/number-badge-list';
import { NumberList } from './number-list/number-list';
import { RadioList } from './radio-list/radio-list';
import { ScrollableList } from './scrollable-list/scrollable-list';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.html',
  styleUrls: ['./lists.scss'],
  imports: [
    DefaultList,
    ActiveList,
    FlushList,
    ContextualClassesList,
    HorizontialList,
    CustomContentList,
    CheckboxList,
    RadioList,
    NumberList,
    JavascriptBehaviorList,
    NumberBadgeList,
    DisabledList,
    ScrollableList,
  ],
})
export class Lists {}

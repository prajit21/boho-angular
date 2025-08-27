import { Component } from '@angular/core';

import { BorderedTab } from './bordered-tab/bordered-tab';
import { IconWithTab } from './icon-with-tab/icon-with-tab';
import { JustifyTab } from './justify-tab/justify-tab';
import { MaterialLeftTab } from './material-left-tab/material-left-tab';
import { MaterialStyleTab } from './material-style-tab/material-style-tab';
import { PillsTab } from './pills-tab/pills-tab';
import { SimpleTab } from './simple-tab/simple-tab';
import { VerticalTab } from './vertical-tab/vertical-tab';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.html',
  styleUrls: ['./tabs.scss'],
  imports: [
    SimpleTab,
    IconWithTab,
    VerticalTab,
    PillsTab,
    JustifyTab,
    MaterialLeftTab,
    MaterialStyleTab,
    BorderedTab,
  ],
})
export class Tabs {}

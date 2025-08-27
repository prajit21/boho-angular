import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

import { contextualClassListData } from '../../../../shared/data/data/ui-kits/lists';

@Component({
  selector: 'app-contextual-classes-list',
  templateUrl: './contextual-classes-list.html',
  styleUrls: ['./contextual-classes-list.scss'],
  imports: [TitleCasePipe],
})
export class ContextualClassesList {
  public contextualClassListData = contextualClassListData;
}

import { Component } from '@angular/core';

import { CommonAbsoluteCard } from './common-absolute-card/common-absolute-card';
import { CommonBorderPositionCard } from './common-border-position-card/common-border-position-card';
import { PrimaryState } from './primary-state/primary-state';
import { SecondaryState } from './secondary-state/secondary-state';
import { WarningState } from './warning-state/warning-state';

@Component({
  selector: 'app-creative-cards',
  templateUrl: './creative-cards.html',
  styleUrls: ['./creative-cards.scss'],
  imports: [
    CommonBorderPositionCard,
    PrimaryState,
    WarningState,
    SecondaryState,
    CommonAbsoluteCard,
  ],
})
export class CreativeCards {}

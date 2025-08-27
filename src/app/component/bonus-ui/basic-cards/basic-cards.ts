import { Component } from '@angular/core';

import { BasicCard } from './basic-card/basic-card';
import { CommonInfoColorCards } from './common-info-color-cards/common-info-color-cards';
import { DarkColorCard } from './dark-color-card/dark-color-card';
import { FlatCard } from './flat-card/flat-card';
import { IconHeadingCard } from './icon-heading-card/icon-heading-card';
import { WithoutShadowCard } from './without-shadow-card/without-shadow-card';

@Component({
  selector: 'app-basic-cards',
  templateUrl: './basic-cards.html',
  styleUrls: ['./basic-cards.scss'],
  imports: [
    BasicCard,
    FlatCard,
    WithoutShadowCard,
    IconHeadingCard,
    DarkColorCard,
    CommonInfoColorCards,
  ],
})
export class BasicCards {}

import { Component } from '@angular/core';

import { DefaultStyle } from './default-style/default-style';
import { HorizontialStyle } from './horizontial-style/horizontial-style';
import { InlineStyle } from './inline-style/inline-style';
import { OfferStyleBorder } from './offer-style-border/offer-style-border';
import { SolidBorder } from './solid-border/solid-border';
import { VariationCheckbox } from './variation-checkbox/variation-checkbox';
import { VariationRadio } from './variation-radio/variation-radio';
import { VerticleStyle } from './verticle-style/verticle-style';
import { WithoutBorder } from './without-border/without-border';

@Component({
  selector: 'app-mega-option',
  templateUrl: './mega-option.html',
  styleUrls: ['./mega-option.scss'],
  imports: [
    VariationRadio,
    VariationCheckbox,
    DefaultStyle,
    WithoutBorder,
    SolidBorder,
    OfferStyleBorder,
    InlineStyle,
    VerticleStyle,
    HorizontialStyle,
  ],
})
export class MegaOption {}

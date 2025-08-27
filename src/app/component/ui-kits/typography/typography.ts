import { Component } from '@angular/core';

import { Blockquotes } from './blockquotes/blockquotes';
import { ColoredHeading } from './colored-heading/colored-heading';
import { DisplayHeading } from './display-heading/display-heading';
import { FontWeight } from './font-weight/font-weight';
import { Heading } from './heading/heading';
import { InlineTextElement } from './inline-text-element/inline-text-element';
import { ListingTypography } from './listing-typography/listing-typography';
import { TextColor } from './text-color/text-color';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.html',
  styleUrls: ['./typography.scss'],
  imports: [
    Heading,
    ColoredHeading,
    FontWeight,
    ListingTypography,
    DisplayHeading,
    InlineTextElement,
    TextColor,
    Blockquotes,
  ],
})
export class Typography {}

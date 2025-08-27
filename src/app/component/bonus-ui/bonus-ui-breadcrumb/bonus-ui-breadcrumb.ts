import { Component } from '@angular/core';

import { ColoredBreadcrumb } from './colored-breadcrumb/colored-breadcrumb';
import { DefaultBreadcrumb } from './default-breadcrumb/default-breadcrumb';
import { DividerBreadcrumb } from './divider-breadcrumb/divider-breadcrumb';
import { IconBreadcrumb } from './icon-breadcrumb/icon-breadcrumb';
import { VariationBreadcrumb } from './variation-breadcrumb/variation-breadcrumb';

@Component({
  selector: 'app-bonus-ui-breadcrumb',
  templateUrl: './bonus-ui-breadcrumb.html',
  styleUrls: ['./bonus-ui-breadcrumb.scss'],
  imports: [
    DefaultBreadcrumb,
    DividerBreadcrumb,
    IconBreadcrumb,
    VariationBreadcrumb,
    ColoredBreadcrumb,
  ],
})
export class BonusUiBreadcrumb {}

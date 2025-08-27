import { Component } from '@angular/core';

import { Backpoint } from './backpoint/backpoint';
import { Caption } from './caption/caption';
import { CustomHoverStriped } from './custom-hover-striped/custom-hover-striped';
import { DashedBorder } from './dashed-border/dashed-border';
import { HeadOption } from './head-option/head-option';
import { HoverRowHorizontial } from './hover-row-horizontial/hover-row-horizontial';
import { InverseTable } from './inverse-table/inverse-table';
import { InverseTablePrimarybg } from './inverse-table-primarybg/inverse-table-primarybg';
import { ResponsiveLightbg } from './responsive-lightbg/responsive-lightbg';
import { SizingTable } from './sizing-table/sizing-table';
import { StripeRowInverse } from './stripe-row-inverse/stripe-row-inverse';
import { TableBottomBorder } from './table-bottom-border/table-bottom-border';

@Component({
  selector: 'app-basic-tables',
  templateUrl: './basic-tables.html',
  styleUrls: ['./basic-tables.scss'],
  imports: [
    TableBottomBorder,
    InverseTable,
    HoverRowHorizontial,
    InverseTablePrimarybg,
    Caption,
    HeadOption,
    StripeRowInverse,
    Backpoint,
    ResponsiveLightbg,
    SizingTable,
    CustomHoverStriped,
    DashedBorder,
  ],
})
export class BasicTables {}

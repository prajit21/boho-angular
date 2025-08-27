import { Component } from '@angular/core';

import { GridColumn } from './grid-column/grid-column';
import { GridOption } from './grid-option/grid-option';
import { HorizontialAlignment } from './horizontial-alignment/horizontial-alignment';
import { Nesting } from './nesting/nesting';
import { Offset } from './offset/offset';
import { Order } from './order/order';
import { VerticalAlignment } from './vertical-alignment/vertical-alignment';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.html',
  styleUrls: ['./grid.scss'],
  imports: [
    GridOption,
    GridColumn,
    VerticalAlignment,
    HorizontialAlignment,
    Nesting,
    Order,
    Offset,
  ],
})
export class Grid {}

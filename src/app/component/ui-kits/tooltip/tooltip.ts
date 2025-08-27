import { Component } from '@angular/core';

import { BasicTooltip } from './basic-tooltip/basic-tooltip';
import { ColoredTooltip } from './colored-tooltip/colored-tooltip';
import { FilledTooltip } from './filled-tooltip/filled-tooltip';
import { TooltipDirection } from './tooltip-direction/tooltip-direction';
import { TooltipHoverEffect } from './tooltip-hover-effect/tooltip-hover-effect';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.html',
  styleUrls: ['./tooltip.scss'],
  imports: [BasicTooltip, ColoredTooltip, TooltipDirection, TooltipHoverEffect, FilledTooltip],
})
export class Tooltip {}

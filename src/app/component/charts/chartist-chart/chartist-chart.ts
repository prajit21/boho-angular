import { Component } from '@angular/core';

import { AdvanceSmilChart } from './advance-smil-chart/advance-smil-chart';
import { BiPolarBarChart } from './bi-polar-bar-chart/bi-polar-bar-chart';
import { BiPolarLineChart } from './bi-polar-line-chart/bi-polar-line-chart';
import { DonutSvgChart } from './donut-svg-chart/donut-svg-chart';
import { ExtremeResponsiveChart } from './extreme-responsive-chart/extreme-responsive-chart';
import { FilledHolesDataChart } from './filled-holes-data-chart/filled-holes-data-chart';
import { HolesDataChart } from './holes-data-chart/holes-data-chart';
import { HorizontialBarChart } from './horizontial-bar-chart/horizontial-bar-chart';
import { LineAreaChart } from './line-area-chart/line-area-chart';
import { SimpleLineChart } from './simple-line-chart/simple-line-chart';
import { StackedBarChart } from './stacked-bar-chart/stacked-bar-chart';
import { SvgPathChart } from './svg-path-chart/svg-path-chart';

@Component({
  selector: 'app-chartist-chart',
  templateUrl: './chartist-chart.html',
  styleUrls: ['./chartist-chart.scss'],
  imports: [
    AdvanceSmilChart,
    SvgPathChart,
    DonutSvgChart,
    BiPolarLineChart,
    LineAreaChart,
    BiPolarBarChart,
    StackedBarChart,
    HorizontialBarChart,
    ExtremeResponsiveChart,
    SimpleLineChart,
    HolesDataChart,
    FilledHolesDataChart,
  ],
})
export class ChartistChart {}

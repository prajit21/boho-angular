import { Component } from '@angular/core';

import { ganttChart } from '../../../../shared/data/charts/charts/google-chart';

@Component({
  selector: 'app-gantt-chart',
  templateUrl: './gantt-chart.html',
  styleUrls: ['./gantt-chart.scss'],
  imports: [],
})
export class GanttChart {
  public ganttChart = ganttChart;
}

import { Routes } from '@angular/router';

import { ApexChart } from './apex-chart/apex-chart';
import { ChartistChart } from './chartist-chart/chartist-chart';
import { ChartjsChart } from './chartjs-chart/chartjs-chart';
import { GoogleChart } from './google-chart/google-chart';

export default [
  {
    path: 'apex-chart',
    component: ApexChart,
    data: {
      title: 'Apex Chart',
      breadcrumb: 'Apex Chart',
    },
  },
  {
    path: 'google-chart',
    component: GoogleChart,
    data: {
      title: 'Google Chart',
      breadcrumb: 'Google Chart',
    },
  },
  {
    path: 'chartjs',
    component: ChartjsChart,
    data: {
      title: 'ChartJS Chart',
      breadcrumb: 'ChartJS Chart',
    },
  },
  {
    path: 'chartist',
    component: ChartistChart,
    data: {
      title: 'Chartist Chart',
      breadcrumb: 'Chartist Chart',
    },
  },
] as Routes;

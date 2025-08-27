import { Routes } from '@angular/router';

import { GoogleMaps } from './google-map/google-map';
import { LeafletMap } from './leaflet-map/leaflet-map';

export default [
  {
    path: 'google-map',
    component: GoogleMaps,
    data: {
      title: 'Google Map',
      breadcrumb: 'Google Map',
    },
  },
  {
    path: 'leaflet-map',
    component: LeafletMap,
    data: {
      title: 'Leaflet Map',
      breadcrumb: 'Leaflet Map',
    },
  },
] as Routes;

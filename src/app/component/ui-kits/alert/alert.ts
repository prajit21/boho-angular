import { Component } from '@angular/core';

import { AdditionalContent } from './additional-content/additional-content';
import { AlertIconTextAction } from './alert-icon-text-action/alert-icon-text-action';
import { DarkThemeAlert } from './dark-theme-alert/dark-theme-alert';
import { DismissDarkAlert } from './dismiss-dark-alert/dismiss-dark-alert';
import { DismissLightAlert } from './dismiss-light-alert/dismiss-light-alert';
import { LeftBorderAlert } from './left-border-alert/left-border-alert';
import { LightThemeAlert } from './light-theme-alert/light-theme-alert';
import { LiveAlert } from './live-alert/live-alert';
import { OutlineDarkLightAlert } from './outline-dark-light-alert/outline-dark-light-alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.html',
  styleUrls: ['./alert.scss'],
  imports: [
    DarkThemeAlert,
    LightThemeAlert,
    OutlineDarkLightAlert,
    AlertIconTextAction,
    DismissDarkAlert,
    DismissLightAlert,
    LiveAlert,
    LeftBorderAlert,
    AdditionalContent,
  ],
})
export class Alert {}

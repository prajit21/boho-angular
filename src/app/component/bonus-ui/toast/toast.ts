import { Component } from '@angular/core';

import { ColorSchemes } from './color-schemes/color-schemes';
import { DefaultToast } from './default-toast/default-toast';
import { LiveToast } from './live-toast/live-toast';
import { StackingToast } from './stacking-toast/stacking-toast';
import { TranslucentToast } from './translucent-toast/translucent-toast';
import { UniqueToast } from './unique-toast/unique-toast';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.html',
  styleUrls: ['./toast.scss'],
  imports: [LiveToast, ColorSchemes, StackingToast, TranslucentToast, DefaultToast, UniqueToast],
})
export class Toast {}

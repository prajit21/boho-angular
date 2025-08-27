import { Component } from '@angular/core';

import { Alerts } from './alerts/alerts';
import { Badge } from './badge/badge';
import { Checkbox } from './checkbox/checkbox';
import { Input } from './input/input';
import { Progressbar } from './progressbar/progressbar';
import { Radiobuttons } from './radiobuttons/radiobuttons';
import { Select } from './select/select';
import { Switch } from './switch/switch';
import { TooltipTrigger } from './tooltip-trigger/tooltip-trigger';
import { UiComponent } from './ui-component/ui-component';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.html',
  styleUrls: ['./table-component.scss'],
  imports: [
    UiComponent,
    Alerts,
    Progressbar,
    Checkbox,
    Radiobuttons,
    Select,
    Input,
    Badge,
    TooltipTrigger,
    Switch,
  ],
})
export class TableComponent {}

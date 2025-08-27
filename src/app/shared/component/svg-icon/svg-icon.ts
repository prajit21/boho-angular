import { Component, inject, input } from '@angular/core';

import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.html',
  styleUrls: ['./svg-icon.scss'],
  imports: [],
})
export class SvgIcon {
  layoutService = inject(LayoutService);

  public readonly icon = input<string>();

  getSvgType() {
    return (
      document.getElementsByClassName('page-sub-header')[0].getAttribute('icon') == 'stroke-svg'
    );
  }
}

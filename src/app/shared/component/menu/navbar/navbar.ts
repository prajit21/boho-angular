import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { NavService } from '../../../services/nav.service';
import { SvgIcon } from '../../svg-icon/svg-icon';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
  imports: [NgTemplateOutlet, RouterLink, SvgIcon, TranslateModule],
})
export class Navbar {
  private navService = inject(NavService);

  public menus = this.navService.MENUITEM;
  public dataitems = JSON.stringify(this.menus[0].items);
}

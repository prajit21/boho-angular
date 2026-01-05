import { NgClass } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import * as feather from 'feather-icons';

import { HideNavScrollService } from '../../../../shared/services/hide-nav-scroll.service';
import { LayoutService } from '../../../../shared/services/layout.service';
import { VerticalNavService } from '../../../../shared/services/vertical-nav.service';
import { Breadcrumb } from '../../breadcrumb/breadcrumb';
import { Customizer } from '../../customizer/customizer';
import { Footer } from '../../footer/footer';
import { Header } from '../../header/header';
import { Navbar } from '../../menu/navbar/navbar';
import { VerticalSidemenu } from '../../menu/vertical-sidemenu/vertical-sidemenu';

@Component({
  selector: 'app-content',
  templateUrl: './content.html',
  styleUrls: ['./content.scss'],
  imports: [
    Header,
    Navbar,
    VerticalSidemenu,
    Breadcrumb,
    RouterOutlet,
    Footer,
    Customizer,
    NgClass,
  ],
})
export class Content implements OnInit {
  navService = inject(VerticalNavService);
  layout = inject(LayoutService);
  hidenav = inject(HideNavScrollService);
  private router = inject(Router);

  currentRoute: string;
  public urlPath: string;

  ngOnInit(): void {
    this.router.url;
  }

  ngAfterViewInit() {
    feather.replace();
  }

  get layoutClass() {
    return (
      this.layout.config.settings.sidebar_type +
      ' ' +
      this.layout.config.settings.layout.replace('layout', 'sidebar')
    );
  }
}

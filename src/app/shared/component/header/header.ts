import { SlicePipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { HideNavScrollService } from '../../services/hide-nav-scroll.service';
import { Menu, NavService } from '../../services/nav.service';
import { SearchService } from '../../services/search.service';
import { VerticalNavService } from '../../services/vertical-nav.service';
import { SvgIcon } from '../svg-icon/svg-icon';
import { Bookmark } from './bookmark/bookmark';
import { Cart } from './cart/cart';
import { Language } from './language/language';
import { Message } from './message/message';
import { Notification } from './notification/notification';
import { Profile } from './profile/profile';
import { Search } from './search/search';
import { ThemeMode } from './theme-mode/theme-mode';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  imports: [
    RouterLink,
    FormsModule,
    Search,
    Notification,
    ThemeMode,
    Bookmark,
    Message,
    Cart,
    Language,
    Profile,
    SvgIcon,
    SlicePipe,
    NgClass,
    SlicePipe,
  ],
})
export class Header {
  navService = inject(VerticalNavService);
  navServices = inject(NavService);
  hidenav = inject(HideNavScrollService);
  searchService = inject(SearchService);

  public menus = this.navService.verticalMenuItem;
  public menuItems: Menu[] = [];
  public items: Menu[] = [];

  public searchResult: boolean = false;
  public searchResultEmpty: boolean = false;
  public text: string = '';
  public open: boolean = false;

  constructor() {
    this.navService.items.subscribe(menuItems => (this.items = menuItems));
  }

  openMenu() {
    this.navService.isDisplay = !this.navService.isDisplay;
  }

  languageToggle() {
    this.navServices.language = !this.navServices.language;
  }

  openSearch() {
    this.open = !this.open;
  }

  searchTerm(term: string) {
    term ? this.addFix() : this.removeFix();
    if (!term) return (this.menuItems = []);
    let items: Menu[] = [];
    term = term.toLowerCase();
    this.items.filter(menuItems => {
      if (!menuItems?.title) return false;
      if (menuItems.title.toLowerCase().includes(term) && menuItems.type === 'link') {
        items.push(menuItems);
      }
      if (!menuItems.children) return false;
      menuItems.children.filter(subItems => {
        if (subItems.title?.toLowerCase().includes(term) && subItems.type === 'link') {
          subItems.icon = menuItems.icon;
          items.push(subItems);
        }
        if (!subItems.children) return false;
        subItems.children.filter(suSubItems => {
          if (suSubItems.title?.toLowerCase().includes(term)) {
            suSubItems.icon = menuItems.icon;
            items.push(suSubItems);
          }
        });
        return;
      });
      this.checkSearchResultEmpty(items);
      this.menuItems = items;
      return;
    });
    return;
  }

  checkSearchResultEmpty(items: Menu[]) {
    if (!items.length) this.searchResultEmpty = true;
    else this.searchResultEmpty = false;
  }

  addFix() {
    this.searchResult = true;
    document.body.classList.add('offcanvas');
  }

  removeFix() {
    this.searchResult = false;
    this.text = '';
    document.body.classList.remove('offcanvas');
  }
}

import { Injectable, inject } from '@angular/core';

import { Menu, VerticalNavService } from './vertical-nav.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  navServices = inject(VerticalNavService);

  public items: Menu[] = [];
  public menuItems: Menu[] = [];
  public searchResult: boolean = false;
  public searchResultEmpty: boolean = false;
  public text: string = '';

  constructor() {
    this.navServices.items.subscribe(menuItems => (this.items = menuItems));
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

  clickOutside(): void {
    this.searchResult = false;
    this.searchResultEmpty = false;
    document.body.classList.remove('offcanvas');
    this.text = '';
  }
}

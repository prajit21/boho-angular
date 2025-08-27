import { SlicePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import * as feather from 'feather-icons';

import { SearchService } from '../../../../shared/services/search.service';
import { ClickOutsideDirective } from '../../../directive/outside.directive';
import { SvgIcon } from '../../svg-icon/svg-icon';

@Component({
  selector: 'app-search',
  templateUrl: './search.html',
  styleUrls: ['./search.scss'],
  imports: [FormsModule, ClickOutsideDirective, SvgIcon, RouterLink, SlicePipe],
})
export class Search {
  searchService = inject(SearchService);

  ngAfterViewInit() {
    feather.replace();
  }
}

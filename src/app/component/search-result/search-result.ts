import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

import { All } from './all/all';
import { Audios } from './audios/audios';
import { Images } from './images/images';
import { Settings } from './settings/settings';
import { Tools } from './tools/tools';
import { Videos } from './videos/videos';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.html',
  styleUrls: ['./search-result.scss'],
  imports: [All, Images, Videos, Audios, Settings, Tools, NgClass],
})
export class SearchResult {
  public openTab: string = 'All';

  public tabbed(val: string) {
    this.openTab = val;
  }
}

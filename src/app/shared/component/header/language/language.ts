import { Component, inject } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { NavService } from '../../../../shared/services/nav.service';

interface languageList {
  language?: string;
  code: string;
  type?: string;
  icon?: string;
}

@Component({
  selector: 'app-language',
  templateUrl: './language.html',
  styleUrls: ['./language.scss'],
  imports: [],
})
export class Language {
  navServices = inject(NavService);
  private translate = inject(TranslateService);

  public language: boolean = false;

  public selectedLanguage: languageList = {
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us',
  };

  public languages: languageList[] = [
    {
      language: 'English',
      code: 'en',
      type: 'US',
      icon: 'us',
    },
    {
      language: 'Español',
      code: 'es',
      icon: 'es',
    },
    {
      language: 'Français',
      code: 'fr',
      icon: 'fr',
    },
    {
      language: 'Português',
      code: 'pt',
      type: 'BR',
      icon: 'pt',
    },
  ];

  ngOnInit() {
    this.changeLanguage(this.selectedLanguage);
  }

  changeLanguage(lang: languageList) {
    this.translate.use(lang.code);
    this.selectedLanguage = lang;
  }
}

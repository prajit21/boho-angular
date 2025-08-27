import { Component } from '@angular/core';

import { AjaxRequestMovie } from './ajax-request-movie/ajax-request-movie';
import { AutoCloser } from './auto-closer/auto-closer';
import { BasicExample } from './basic-example/basic-example';
import { DangerAlert } from './danger-alert/danger-alert';
import { InfoAlert } from './info-alert/info-alert';
import { PikachuAlert } from './pikachu-alert/pikachu-alert';
import { QuestionAlert } from './question-alert/question-alert';
import { SuccessMessage } from './success-message/success-message';
import { TitleWithText } from './title-with-text/title-with-text';
import { UsernameAlert } from './username-alert/username-alert';
import { WarningAlert } from './warning-alert/warning-alert';
import { WarningMode } from './warning-mode/warning-mode';

@Component({
  selector: 'app-sweetalert2',
  templateUrl: './sweetalert2.html',
  styleUrls: ['./sweetalert2.scss'],
  imports: [
    BasicExample,
    TitleWithText,
    InfoAlert,
    WarningAlert,
    PikachuAlert,
    QuestionAlert,
    UsernameAlert,
    SuccessMessage,
    DangerAlert,
    WarningMode,
    AutoCloser,
    AjaxRequestMovie,
  ],
})
export class Sweetalert2 {}

import { Component } from '@angular/core';

import { BasicModal } from './basic-modal/basic-modal';
import { BohoCustomModal } from './boho-custom-modal/boho-custom-modal';
import { CenteredModal } from './centered-modal/centered-modal';
import { FullscreenModal } from './fullscreen-modal/fullscreen-modal';
import { SizesModal } from './sizes-modal/sizes-modal';
import { StaticBackdrop } from './static-backdrop/static-backdrop';
import { ToggleModal } from './toggle-modal/toggle-modal';

@Component({
  selector: 'app-ui-modal',
  templateUrl: './ui-modal.html',
  styleUrls: ['./ui-modal.scss'],
  imports: [
    BasicModal,
    SizesModal,
    FullscreenModal,
    CenteredModal,
    ToggleModal,
    StaticBackdrop,
    BohoCustomModal,
  ],
})
export class UiModal {}

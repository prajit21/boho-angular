import { Routes } from '@angular/router';

import { BasicCards } from './basic-cards/basic-cards';
import { BonusUiBreadcrumb } from './bonus-ui-breadcrumb/bonus-ui-breadcrumb';
import { CreativeCards } from './creative-cards/creative-cards';
import { Dropzone } from './dropzone/dropzone';
import { ImageCrop } from './image-cropper/image-cropper';
import { OwlCarousel } from './owl-carousel/owl-carousel';
import { Pagination } from './pagination/pagination';
import { RangeSlider } from './range-slider/range-slider';
import { Rating } from './rating/rating';
import { Ribbons } from './ribbons/ribbons';
import { Sweetalert2 } from './sweetalert2/sweetalert2';
import { TimeLine1 } from './time-line1/time-line1';
import { Toast } from './toast/toast';

export default [
  {
    path: 'toasts',
    component: Toast,
    data: {
      title: 'Toast',
      breadcrumb: 'Toast',
    },
  },
  {
    path: 'rating',
    component: Rating,
    data: {
      title: 'Rating',
      breadcrumb: 'Rating',
    },
  },
  {
    path: 'dropzone',
    component: Dropzone,
    data: {
      title: 'Dropzone',
      breadcrumb: 'Dropzone',
    },
  },
  {
    path: 'sweetalert2',
    component: Sweetalert2,
    data: {
      title: 'Sweet Alert',
      breadcrumb: 'Sweet Alert',
    },
  },
  {
    path: 'owl-carousel',
    component: OwlCarousel,
    data: {
      title: 'Owl Carousel',
      breadcrumb: 'Owl Carousel',
    },
  },
  {
    path: 'ribbons',
    component: Ribbons,
    data: {
      title: 'Ribbons',
      breadcrumb: 'Ribbons',
    },
  },
  {
    path: 'pagination',
    component: Pagination,
    data: {
      title: 'Pagination',
      breadcrumb: 'Pagination',
    },
  },
  {
    path: 'breadcrumb',
    component: BonusUiBreadcrumb,
    data: {
      title: 'Breadcrumb',
      breadcrumb: 'Breadcrumb',
    },
  },
  {
    path: 'range-slider',
    component: RangeSlider,
    data: {
      title: 'Range Slider',
      breadcrumb: 'Range Slider',
    },
  },
  {
    path: 'basic-card',
    component: BasicCards,
    data: {
      title: 'Basic Card',
      breadcrumb: 'Basic Card',
    },
  },
  {
    path: 'image-cropper',
    component: ImageCrop,
    data: {
      title: 'Image Cropper',
      breadcrumb: 'Image Cropper',
    },
  },
  {
    path: 'creative-card',
    component: CreativeCards,
    data: {
      title: 'Creative Card',
      breadcrumb: 'Creative Card',
    },
  },
  {
    path: 'timeline',
    component: TimeLine1,
    data: {
      title: 'Timeline',
      breadcrumb: 'Timeline',
    },
  },
] as Routes;

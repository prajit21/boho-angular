import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox, GallerizeDirective } from 'ng-gallery/lightbox';

import { galleryGridData } from '../../../shared/data/data/gallery/gallery-grid';

@Component({
  selector: 'app-gallery-grid-desc',
  templateUrl: './gallery-grid-desc.html',
  styleUrls: ['./gallery-grid-desc.scss'],
  imports: [GallerizeDirective, CommonModule],
})
export class GalleryGridDesc {
  gallery = inject(Gallery);
  lightbox = inject(Lightbox);

  public galleryGridData = galleryGridData;
  public items: GalleryItem[];

  ngOnInit() {
    this.items = this.galleryGridData.map(
      item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }),
    );

    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });

    lightboxRef.load(this.items);
  }
}

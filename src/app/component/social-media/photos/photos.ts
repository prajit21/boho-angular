import { Component, OnInit, inject } from '@angular/core';

import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox, GallerizeDirective } from 'ng-gallery/lightbox';

import * as Data from '../../../shared/data/data/social-media/social-media-data';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.html',
  styleUrls: ['./photos.scss'],
  imports: [GallerizeDirective],
})
export class Photos implements OnInit {
  gallery = inject(Gallery);
  lightbox = inject(Lightbox);

  public photosData = Data.photosData;
  items: GalleryItem[];

  ngOnInit() {
    /** Basic Gallery Example */

    // Creat gallery items
    this.items = this.photosData.map(
      item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }),
    );

    /** Lightbox Example */

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }
}

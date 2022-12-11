import { Component, NgZone } from '@angular/core';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.initPhotoSwipe();
  }

  private initPhotoSwipe() {
    this._ngZone.runOutsideAngular(() => {
      const lightbox = new PhotoSwipeLightbox({
        gallery: '#my-gallery',
        children: 'a',
        pswpModule: PhotoSwipe,
      });
      lightbox.init();
    });
  }
}

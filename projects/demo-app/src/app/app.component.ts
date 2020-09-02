import { Component } from '@angular/core';
import { Dimensions } from '../../../ngx-image-cropper/src/lib/interfaces/dimensions.interface';
import { ImageTransform } from '../../../ngx-image-cropper/src/lib/interfaces/image-transform.interface';
import { ImageCroppedEvent } from '../../../ngx-image-cropper/src/lib/interfaces/image-cropped-event.interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angular-image-handling';
    thisSmartnameWidth: number = 300;
    thisSmartnameHeight: number = 300;
    thisImgWidth: number = 0;
    thisImgHeight: number = 0;
    imageChangedEvent: any = '';
    croppedImage: any = '';
    imageAspectRatio: number;
    scale = 1;
    transform: ImageTransform = {};
      
    fileChangeEvent(event: any): void { 
        console.log('Image changed');
        this.imageChangedEvent = event;
        this.scale = 1;
        this.transform = {
            ...this.transform,
            scale: this.scale
        };
    }
    
    imageLoaded(sourceImage:HTMLImageElement) {
        // show cropper
        console.log('Image loaded');
        var imgWidth = sourceImage.naturalWidth;
        var imgHeight = sourceImage.naturalHeight;
        if (imgHeight > this.thisSmartnameHeight && imgWidth > this.thisSmartnameWidth) {
            this.imageAspectRatio = this.thisSmartnameWidth/this.thisSmartnameHeight; 
        } else if (imgHeight > this.thisSmartnameHeight) {
            this.imageAspectRatio = imgWidth/this.thisSmartnameHeight;
        } else if (imgWidth > this.thisSmartnameWidth) {
            this.imageAspectRatio = this.thisSmartnameWidth/imgHeight; 
        } else {
            this.imageAspectRatio = imgWidth/imgHeight;
        }
    }
    
    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }
    
    cropperReady(sourceImageDimensions: Dimensions) {
        // cropper ready
        console.log('Cropper ready');
    }
  
    loadImageFailed() {
        // show message
    }
  
    zoomOut() {
        console.log('Zoom out');
        if (this.scale > .5) {
            this.scale -= .1;
            this.transform = {
            ...this.transform,
            scale: this.scale
            };
        }
    }
  
    zoomIn() {
        console.log('Zoom in');
        if (this.scale < 2) {
            this.scale += .1;
            this.transform = {
                ...this.transform,
                scale: this.scale
            };
        }
    }
}

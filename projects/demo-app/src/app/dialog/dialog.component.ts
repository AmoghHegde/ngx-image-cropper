import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Dimensions } from '../../../../ngx-image-cropper/src/lib/interfaces/dimensions.interface';
import { ImageTransform } from '../../../../ngx-image-cropper/src/lib/interfaces/image-transform.interface';
import { ImageCroppedEvent } from '../../../../ngx-image-cropper/src/lib/interfaces/image-cropped-event.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

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
  
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.imageChangedEvent = this.data.imageChangedEvent;
  }

  onNoClick(): void {
    this.dialogRef.close();
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
      if (this.scale > .8) {
          this.scale -= .1;
          this.transform = {
          ...this.transform,
          scale: this.scale
          };
      }
  }

  zoomIn() {
      console.log('Zoom in');
      if (this.scale < 1.2) {
          this.scale += .1;
          this.transform = {
              ...this.transform,
              scale: this.scale
          };
      }
  }
}

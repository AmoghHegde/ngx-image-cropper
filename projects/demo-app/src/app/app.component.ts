import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Dimensions } from '../../../ngx-image-cropper/src/lib/interfaces/dimensions.interface';
import { ImageTransform } from '../../../ngx-image-cropper/src/lib/interfaces/image-transform.interface';
import { ImageCroppedEvent } from '../../../ngx-image-cropper/src/lib/interfaces/image-cropped-event.interface';
import { DialogComponent } from '../app/dialog/dialog.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    imageChangedEvent: any = '';
    croppedImage: any = '';

    constructor(public dialog: MatDialog) {}
      
    fileChangeEvent(event: any): void { 
        console.log('Image changed');
        this.imageChangedEvent = event;
        let dialogRef = this.dialog.open(DialogComponent, {
            width: '600px',
            height: '600px',
            data: {imageChangedEvent: this.imageChangedEvent}
        });
    
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.croppedImage = result;
        });
    }
}

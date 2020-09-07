import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { ImageCropperModule } from '../../../../ngx-image-cropper/src/lib/image-cropper.module';
import { DialogComponent } from './dialog.component';

@NgModule({
  declarations: [DialogComponent],
  entryComponents: [DialogComponent],
  imports: [
    MatDialogModule,
    ImageCropperModule
  ],
})
export class DialogModule {
}
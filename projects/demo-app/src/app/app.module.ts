import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageCropperModule } from '../../../ngx-image-cropper/src/lib/image-cropper.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from './dialog/dialog.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        ImageCropperModule,
        MatDialogModule,
        BrowserAnimationsModule,
        DialogModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

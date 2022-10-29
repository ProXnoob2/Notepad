import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotepadsComponent } from './MyComponents/notepads/notepads.component';
import { AddNoteComponent } from './MyComponents/add-note/add-note.component';
import { NoteItemComponent } from './MyComponents/note-item/note-item.component';
import { FormsModule } from '@angular/forms';
import { EditNoteComponent } from './MyComponents/edit-note/edit-note.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './MyComponents/notepads/confirmation-dialog/confirmation-dialog.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    NotepadsComponent,
    AddNoteComponent,
    NoteItemComponent,
    EditNoteComponent,
    AboutComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxGoogleAnalyticsModule.forRoot('G-FTYW6Z55V5'),
    NgxGoogleAnalyticsRouterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotepadsComponent } from './MyComponents/notepads/notepads.component';
import { AddNoteComponent } from './MyComponents/add-note/add-note.component';
import { NoteItemComponent } from './MyComponents/note-item/note-item.component';
import { FormsModule } from '@angular/forms';
import { EditNoteComponent } from './MyComponents/edit-note/edit-note.component';
import { AboutComponent } from './MyComponents/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NotepadsComponent,
    AddNoteComponent,
    NoteItemComponent,
    EditNoteComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

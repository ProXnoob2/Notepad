import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatMenuModule } from '@angular/material/menu';
import { LoginComponent } from './MyComponents/login/login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthService } from './Services/auth-service/auth.service';
import { UserService } from './Services/user-service/user.service';
import { AdminComponent } from './MyComponents/admin/admin.component';
import { AdminAuthGuardService } from './Services/admin-auth-guard/admin-auth-guard.service';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { NotesService } from './Services/notes-service/notes.service';
import { LoaderService } from './Services/loader-service/loader.service';
import { LoaderComponent } from './MyComponents/loader/loader.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    NotepadsComponent,
    AddNoteComponent,
    NoteItemComponent,
    EditNoteComponent,
    AboutComponent,
    ConfirmationDialogComponent,
    LoginComponent,
    AdminComponent,
    LoaderComponent
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
    BrowserAnimationsModule,
    NgbModule,
    MatMenuModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [
    AuthService,
    UserService,
    AdminAuthGuardService,
    NotesService,
    LoaderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

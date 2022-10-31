import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { AddNoteComponent } from './MyComponents/add-note/add-note.component';
import { EditNoteComponent } from './MyComponents/edit-note/edit-note.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { NotepadsComponent } from './MyComponents/notepads/notepads.component';

const routes: Routes = [
  { path: '', component: NotepadsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

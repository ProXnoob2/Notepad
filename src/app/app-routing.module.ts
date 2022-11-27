import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { AddNoteComponent } from './MyComponents/add-note/add-note.component';
import { AdminComponent } from './MyComponents/admin/admin.component';
import { EditNoteComponent } from './MyComponents/edit-note/edit-note.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { NotepadsComponent } from './MyComponents/notepads/notepads.component';
import { AdminAuthGuardService } from './Services/admin-auth-guard/admin-auth-guard.service';

const routes: Routes = [
  { path: '', component: NotepadsComponent },
  { path: 'about', component: AboutComponent },
  // { path: 'add', component: AddNoteComponent },
  // { path: 'edit', component: EditNoteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AdminAuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

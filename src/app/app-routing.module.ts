import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from './MyComponents/add-note/add-note.component';
import { EditNoteComponent } from './MyComponents/edit-note/edit-note.component';
import { NotepadsComponent } from './MyComponents/notepads/notepads.component';

const routes: Routes = [
  { path: '', component: NotepadsComponent },
  // { path: 'add', component: AddNoteComponent },
  // { path: 'edit', component: EditNoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

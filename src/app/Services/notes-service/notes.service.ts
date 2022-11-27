import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Note } from 'src/app/Note';
import { UserService } from '../user-service/user.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private db: AngularFireDatabase, private UserService: UserService) { }

  create(note: Note) {
    this.db.list('/users/').push(note);
  }

}

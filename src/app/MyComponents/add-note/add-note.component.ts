import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note } from '../../Note';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  title: string | any;
  desc: string | any;

  @Output() noteAdd: EventEmitter<Note> = new EventEmitter()
  @Output() noteDiscard: EventEmitter<Note> = new EventEmitter()

  constructor(public _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      panelClass: 'custom-snackbar',
    });
  }

  onSubmit() {
    if (!this.title || !this.desc) {
      return this.openSnackBar("Title Or Description Can't Be Empty !", "OK")
    }
    const note = {
      sno: 0,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.noteAdd.emit(new Note(note))
    this.openSnackBar('Note Added', 'Dismiss');
  }

  onDiscard() {
    this.noteDiscard.emit()
  }
}

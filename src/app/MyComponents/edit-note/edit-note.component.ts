import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../../Note';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  @Input()
  indexNote!: Note;

  title!: string;
  desc!: string;

  @Output() noteEdit: EventEmitter<Note> = new EventEmitter()
  @Output() noteDiscard: EventEmitter<Note> = new EventEmitter()

  constructor(public _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.title = this.indexNote.title;
    this.desc = this.indexNote.desc
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      panelClass: 'custom-snackbar',
    });
  }

  onEdit() {
    if (!this.title || !this.desc) {
      return this.openSnackBar("Title Or Description Can't Be Empty !", "OK")
    }
    const note = {
      sno: 0,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.noteEdit.emit(note)
    this.openSnackBar('Note Edited', 'Dismiss');
  }

  onDiscard() {
    this.noteDiscard.emit()
  }

}

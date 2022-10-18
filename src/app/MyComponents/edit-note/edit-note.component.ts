import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note } from '../../Note';
import { notesData } from '../notes.data';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {

  notes: Note[] = notesData;

  title!: string;
  desc!: string;

  @Output() noteEdit: EventEmitter<Note> = new EventEmitter()
  @Output() noteDiscard: EventEmitter<Note> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onEdit() {
    const note = {
      sno: 0,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.noteEdit.emit(note)
  }

  onDiscard() {
    this.noteDiscard.emit()
  }

}

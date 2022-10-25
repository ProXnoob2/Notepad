import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note } from '../../Note';

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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const note = {
      sno: 0,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.noteAdd.emit(new Note(note))
  }

  onDiscard() {
    this.noteDiscard.emit()
  }
}

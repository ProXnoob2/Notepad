import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/Note';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {

  @Input()
  note!: Note;

  @Input("index")
  index!: number;

  @Output() noteDelete: EventEmitter<Note> = new EventEmitter()
  @Output() buttonEdit: EventEmitter<Note> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClick(note: Note) {
    this.noteDelete.emit(this.note);
    console.log("onClick")
  }

  onclickEdit(note: Note) {
    this.buttonEdit.emit(this.note);
  }

}

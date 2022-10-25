import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../../Note';

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

  constructor() { }

  ngOnInit(): void {
    this.title = this.indexNote.title;
    this.desc = this.indexNote.desc
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

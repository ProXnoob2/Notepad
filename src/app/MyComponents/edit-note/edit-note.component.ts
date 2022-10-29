import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalService } from 'src/app/Services/global-service/global.service';
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

  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
    this.title = this.indexNote.title;
    this.desc = this.indexNote.desc
  }

  onEdit() {
    if (!this.title || !this.desc) {
      return this.globalService.openSnackBar("Title Or Description Can't Be Empty !")
    }
    const note = {
      sno: 0,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.noteEdit.emit(note)
    this.globalService.openSnackBar('Note Edited');
  }

  onDiscard() {
    this.noteDiscard.emit()
  }

}

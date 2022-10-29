import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GlobalService } from 'src/app/Services/global-service/global.service';
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

  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.title || !this.desc) {
      return this.globalService.openSnackBar("Title Or Description Can't Be Empty !")
    }
    const note = {
      sno: 0,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.noteAdd.emit(new Note(note))
    this.globalService.openSnackBar('Note Added');
  }

  onDiscard() {
    this.noteDiscard.emit()
  }
}

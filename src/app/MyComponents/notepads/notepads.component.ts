import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GlobalService } from 'src/app/Services/global-service/global.service';
import { Note } from '../../Note';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-notepads',
  templateUrl: './notepads.component.html',
  styleUrls: ['./notepads.component.scss']
})
export class NotepadsComponent implements OnInit {

  notes: Note[];
  addNoteSection: boolean = false
  editNoteSection: boolean = false
  editCurrentNote!: Note;
  index!: number
  localItem!: string | null;

  constructor(public dialog: MatDialog, private globalService: GlobalService) {
    this.localItem = localStorage.getItem("notes");
    if (this.localItem == null) {
      this.notes = []
    }
    else {
      this.notes = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
  }

  openConfirmationDialog(number: number, note?: Note) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: { number: number }
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        note?.active ? this.deleteNote(note) : this.deleteAll();
      }
    })
  }

  deleteNote(note: Note) {
    this.globalService.openSnackBar('Note Deleted');
    console.log(note)
    const index = this.notes.indexOf(note);
    this.notes.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }

  addNote(note: Note) {
    console.log(note);
    this.notes.push(note);
    this.addNoteSection = false
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }

  discardNote(note: Note) {
    console.log("hi");
    this.addNoteSection = false
    this.editNoteSection = false
  }

  adeeb() {
    this.addNoteSection = true
  }

  editNote(note: Note) {
    console.log(this.index);
    this.notes.splice(this.index, 1, note);
    console.log(note);
    this.editNoteSection = false
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }

  editPage(note: Note) {
    const index = this.notes.indexOf(note);
    console.log(index);
    this.index = index
    this.editCurrentNote = this.notes[index]
    this.editNoteSection = true
  }

  deleteAll() {
    this.globalService.openSnackBar('All Notes Deleted');
    if (this.localItem !== null) {
      this.notes = [];
    }
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }
}
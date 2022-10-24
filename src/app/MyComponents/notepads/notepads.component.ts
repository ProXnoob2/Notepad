import { Component, OnInit } from '@angular/core';
import { Note } from '../../Note';
// import { notesData } from '../notes.data';

@Component({
  selector: 'app-notepads',
  templateUrl: './notepads.component.html',
  styleUrls: ['./notepads.component.css']
})
export class NotepadsComponent implements OnInit {

  notes: Note[];
  addNoteSection: boolean = false
  editNoteSection: boolean = false
  editCurrentNote!: Note;
  index!: number
  localItem!: string | null;

  constructor() {
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

  deleteNote(note: Note) {
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
}
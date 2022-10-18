import { Component, OnInit } from '@angular/core';
import { Note } from '../../Note';
import { notesData } from '../notes.data';

@Component({
  selector: 'app-notepads',
  templateUrl: './notepads.component.html',
  styleUrls: ['./notepads.component.css']
})
export class NotepadsComponent implements OnInit {

  notes: Note[] = notesData;
  addNoteSection: boolean = true
  editNoteSection: boolean = true

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteNote(note: Note) {
    console.log(note)
    const index = this.notes.indexOf(note);
    this.notes.splice(index, 1)
  }

  addNote(note: Note) {
    console.log(note);
    this.notes.push(note);
    // window.alert("Note Added");
    this.addNoteSection = true
  }

  discardNote(note: Note) {
    console.log("hi");
    this.addNoteSection = true
    this.editNoteSection = true
  }

  adeeb() {
    this.addNoteSection = false
  }

  editNote(note: Note) {
    console.log(note);
    this.editNoteSection = true
  }

  editPage(note: Note) {
    this.editNoteSection = false
  }
}
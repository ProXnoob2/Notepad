import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {
  isLogout: boolean = false

  constructor(private dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { number: number, isLogout: boolean }) {
    if (data.isLogout) this.isLogout = data.isLogout
  }

  ngOnInit(): void {
  }

  close(opt?: any) {
    this.dialogRef.close(opt);
  }

}

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(public _snackBar: MatSnackBar) { }

  openSnackBar(message: string, action = "OK") {
    this._snackBar.open(message, action, {
      duration: 3000,
      panelClass: 'custom-snackbar',
    });
  }
}

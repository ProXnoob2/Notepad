import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { BehaviorSubject } from 'rxjs';
import { LoaderComponent } from 'src/app/MyComponents/loader/loader.component';


@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loading!: boolean;
  dialogRef: any;
  public loaderMessage = new BehaviorSubject<string>('');
  private _loading = new BehaviorSubject<boolean>(false);

  constructor(public dialog: MatDialog) { }

  loadData(message: string = '') {
    if (message && message.length === 0) {
      return;
    }
    this.loaderMessage.next(message);
    this._loading.next(true);
    this.loading = true;
    this.loadingDialog();
  }

  unloadData(message?: string) {
    this._loading.next(false);
    this.loaderMessage.next('');
    this.loading = false;
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  loadingDialog() {
    this.dialogRef = this.dialog.open(LoaderComponent, {
      panelClass: 'custom-dialog-container',
    })
  }
}

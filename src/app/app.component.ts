import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfirmationDialogComponent } from './MyComponents/notepads/confirmation-dialog/confirmation-dialog.component';
import { AdminAuthGuardService } from './Services/admin-auth-guard/admin-auth-guard.service';
import { AuthService } from './Services/auth-service/auth.service';
import { LoaderService } from './Services/loader-service/loader.service';
import { UserService } from './Services/user-service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  isAdmin: boolean = false;
  adminSubscription!: Subscription;

  theme: Theme = 'dark-theme';

  constructor(
    private adminAuth: AdminAuthGuardService,
    private userService: UserService,
    private router: Router,
    private loaderService: LoaderService,
    public auth: AuthService,
    private dialog: MatDialog,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {
    auth.user$.subscribe(user => {
      if (!user) return;

      userService.save(user);

      let returnUrl = localStorage.getItem('returnUrl') as string;

      if (!returnUrl) return;
      localStorage.removeItem('returnUrl')
      router.navigateByUrl(returnUrl);
    });

    this.adminSubscription = adminAuth.canActivate().subscribe((res) => {
      if (res) {
        this.isAdmin = res;
      }
    });

    this.loaderService.loadData('Loading...');
    auth.user$.subscribe((user) => {
      if (user) {
        userService.save(user);
        this.loaderService.unloadData('Loading...');
      } else {
        this.loaderService.unloadData('Loading...');
      }
    });
  }

  ngOnInit() {
    this.initializeTheme();
  }

  initializeTheme = (): void => this.renderer.addClass(this.document.body, this.theme);

  switchTheme() {
    this.document.body.classList.replace(
      this.theme,
      this.theme === 'light-theme'
        ? (this.theme = 'dark-theme')
        : (this.theme = 'light-theme')
    );
  }

  openConfirmationDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: { isLogout: true }
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.logout()
      }
    })
  }

  logout() {
    this.auth.logout();
  }

  title = 'notepad';
}

export type Theme = 'light-theme' | 'dark-theme';
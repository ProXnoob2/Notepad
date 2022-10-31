import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdminAuthGuardService } from './Services/admin-auth-guard/admin-auth-guard.service';
import { AuthService } from './Services/auth-service/auth.service';
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
    public auth: AuthService,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {
    auth.user$.subscribe(user => {
      if (user) {
        userService.save(user);

        let returnUrl: any = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    })
    this.adminSubscription = adminAuth.canActivate().subscribe((res) => {
      if (res) {
        this.isAdmin = res;
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

  logout() {
    this.auth.logout();
  }

  title = 'notepad';
}

export type Theme = 'light-theme' | 'dark-theme';
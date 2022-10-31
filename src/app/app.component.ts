import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './Services/auth-service/auth.service';
import { UserService } from './Services/user-service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  theme: Theme = 'dark-theme';

  constructor(
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
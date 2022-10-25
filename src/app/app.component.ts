import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  theme: Theme = 'light-theme';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) { }

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

  title = 'notepad';
}

export type Theme = 'light-theme' | 'dark-theme';
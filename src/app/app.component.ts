import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'movies24';
  constructor(private _Renderer2: Renderer2) {}

  scrolTop(): void {
    this._Renderer2.setProperty(document.documentElement, 'scrollTop', 0);
  }
}

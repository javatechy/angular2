// Main app compnent
import { Component } from '@angular/core';

// Decorator
@Component({
  selector: 'my-app',
  // refers to index.html
  //template: `<h1>Hello {{name}}</h1>`,
  template: `<ul><li><a routerLink="/">Home</a></li><li><a routerLink="/about">About</a></li></ul><hr/><router-outlet></router-outlet>`,
})
export class AppComponent  { name = 'Angular'; }

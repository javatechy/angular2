// Main app compnent
import { Component } from '@angular/core';

// Decorator
@Component({
  selector: 'my-app',
  // refers to index.html
  //template: `<h1>Hello {{name}}</h1>`,
  template: `<user></user>`,
})
export class AppComponent  { name = 'Angular'; }

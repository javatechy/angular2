// Main app compnent
import { Component } from '@angular/core';

// Decorator
@Component({
  selector: 'user',
  // refers to index.html file
  template: `<h1>Hello {{name}}</h1>`,
})
export class UserComponent  { name = 'Angular'; }

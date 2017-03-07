// Main app compnent
import { Component } from '@angular/core';

// Decorator
@Component({
  selector: 'user',
  // refers to index.html file
  template: `<h1>Hello {{name}} EMAIL :  {{email}}</h1>
<h2>Address</h2>
<li>Street :  {{address.street}}</li>
<li>Hobbies :  {{hobbies}}</li>
<ul>
<li *ngFor="let hobby of hobbies">
       {{hobby}}
</li>
</ul>
`,
})
export class UserComponent  {
  name :string;
  email :string;
  address :address;
  hobbies :string[];
  constructor(){
    this.name = 'Angular';
    this.email = 'deepak@gmail.com';
    this.address = {
      street :'1St Street',
      houseNumber : 1102
    };
    this.hobbies =['music','sports']
  }
}
interface  address{
  street : string;
  houseNumber:number
}

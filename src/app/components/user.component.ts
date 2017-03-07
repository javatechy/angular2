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
<button (click)="toggleHobbies()"> Show Hobies</button>
<div *ngIf="showHobbies">
<ul >
<li *ngFor="let hobby of hobbies">
       {{hobby}}
</li>
</ul>
</div>
`,
})
export class UserComponent  {
  name :string;
  email :string;
  address :address;
  hobbies :string[];
  showHobbies :boolean;
  constructor(){
    this.name = 'Angular';
    this.email = 'deepak@gmail.com';
    this.address = {
      street :'1St Street',
      houseNumber : 1102
    };
    this.hobbies =['music','sports'];
    this.showHobbies=false;

  }

  toggleHobbies(){
    if(this.showHobbies==true){
      this.showHobbies=false;
    }else{
      this.showHobbies=true;
    }
  }
}
interface  address{
  street : string;
  houseNumber:number
}

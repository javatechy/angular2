// Main app compnent
import { Component } from '@angular/core';
import {PostsService}  from '../services/posts.service';
// Decorator
@Component({
  selector: 'user',
  // refers to index.html file
  template: `<h1>Hello {{name}} EMAIL :  {{email}}</h1>
<h2>Address</h2>
<li>Street :  {{address.street}}</li>
<li>Hobbies :  {{hobbies}}</li>
<button (click)="toggleHobbies()"> {{showHobbies ? "Hide Hobbies":"Show Hobbies"}}</button>
<div *ngIf="showHobbies">
<ul >
<li *ngFor="let hobby of hobbies; let i=index" >
       {{hobby}} <button (click) ="deleteHobby(i)">REMOVE</button>
</li>
</ul>
</div>
<form (submit) ="addHobby(hobby.value)">
<label> Add hobby : </label>
<input type="text" name="hobby" #hobby /> <br/>
</form>
<br/>
<hr/>
<h2> Edit User Data</h2>
<form>
<label> Name : </label>
<input type="text" name="name" [(ngModel)]="name" /> <br/><label>Email ID : </label>
<input type="text" name="email" [(ngModel)]="email" /><br/><label> Street  : </label>
<input type="text" name="address.street" [(ngModel)]="address.street" /><br/><label> House Number : </label>
<input type="text" name="address.houseNumber" [(ngModel)]="address.houseNumber" /><br/>
</form>
<br/>

<h1>Posts</h1>

<div *ngFor="let post  of posts">
<h3>{{post.title}}</h3>
<h4>{{post.body}}</h4>
</div>
`,
  providers: [PostsService]
})
export class UserComponent  {
  name :string;
  email :string;
  address :address;
  hobbies :string[];
  showHobbies :boolean;
  posts:Post[];
  constructor(private postsService:PostsService){
    this.name = 'Angular';
    this.email = 'deepak@gmail.com';
    this.address = {
      street :'1St Street',
      houseNumber : 1102
    };
    this.hobbies =['music','sports'];
    this.showHobbies=false;
    this.postsService.getPosts().subscribe(posts=>{
    console.log(posts);
    this.posts=posts;
    }
);
  }
  addHobby(hobby: string){
  this.hobbies.push(hobby);
  }
  toggleHobbies(){
    if(this.showHobbies==true){
      this.showHobbies=false;
    }else{
      this.showHobbies=true;
    }
  }
  deleteHobby(i :number){
    this.hobbies.splice(i,1);
  }
}
interface  address{
  street : string;
  houseNumber:number
}

interface  Post{
  id:number;
  userId: number;
  body:string;
  title:string
}

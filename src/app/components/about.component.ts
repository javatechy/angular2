// Main app compnent
import { Component } from '@angular/core';
import {PostsService}  from '../services/posts.service';
// Decorator
@Component({
  moduleId :module.id,
  selector: 'about',
  // refers to index.html file
  templateUrl:'about.component.html',
  providers: [PostsService]
})
export class AboutComponent  {
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
    this.postsService.postRequest({userIds:"ZU201702031340530896"}).subscribe(posts=>{
      console.log("HIT SUCCES API - RESPONSE =>"+JSON.stringify(posts));
       // this.posts=posts;
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
